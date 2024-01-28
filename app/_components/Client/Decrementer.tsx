'use client'

export default function Decrementer({ setCounter }: any) {
    return (
        <button onClick={() => setCounter(-1)} className="w-8 aspect-square text-black bg-white rounded-sm">-</button>
    );
}