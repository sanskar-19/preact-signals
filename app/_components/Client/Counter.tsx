'use client'

import { effect, signal } from "@preact/signals-react";
import { useComputed, useSignal, useSignalEffect, useSignals } from "@preact/signals-react/runtime";
import Child from "./Child";
import Incrementer from "./Incrementer";
import Decrementer from "./Decrementer";

// count
// const count = signal(0);

// set counter
// export function setCounter(value: number) {
//     count.value = count.value + value;
// }

// effect
// effect(() => console.log(count))
type User = {
    name: string,
    score: number
}

export default function Counter() {
    // const user = useSignal({ name: useSignal("John"), score: useSignal(10) });
    const count = useSignal<number>(0);
    const double = useComputed(() => count.value * 2);

    // Set count
    function setCount(value: number) {
        count.value += value;
    }

    // // Set score
    // function setScore(value: number) {
    //     user.value.score.value += value;
    // }

    // // Set name
    // function setName(value: string) {
    //     user.value.name.value = value;
    // }

    // // signal effect
    // useSignalEffect(() => {
    //     console.log(user.value.score.value)
    // })

    // // signal effect
    // useSignalEffect(() => {
    //     console.log(user.value.name.value)
    // })

    return (
        <>
            {/* <h3>{user.value.score}</h3>
            <h3>{user.value.name}</h3> */}

            {/* <h3>{count}</h3>
            <h3>{double}</h3> */}

            {/* This works */}
            <button onClick={() => count.value++}>
                Value: {count}, value x 2 = {double}
            </button>

            {/* This doesn't works */}
            <button onClick={() => count.value++}>
                Value: {count.value}, value x 2 = {double.value}
            </button>

            <section className="flex gap-4">
                <Incrementer setCounter={setCount}></Incrementer>
                <Decrementer setCounter={setCount}></Decrementer>
            </section>

            {/* <input type="text" className="bg-transparent text-white text-sm border" onChange={(e) => setName(e?.currentTarget?.value ?? "")}></input> */}

            {/* Render child */}
            <Child></Child>
        </>
    );
}