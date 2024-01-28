'use client'
// import { setCounter } from "./Counter";

export default function Incrementer({ setCounter }: any) {
    return (
        <button onClick={() => setCounter(1)} className="w-8 aspect-square text-black bg-white rounded-sm">+</button>
    );
}