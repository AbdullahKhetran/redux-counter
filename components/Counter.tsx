"use client"

import { decrement, increment, incrementByAmount } from "@/redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import Link from "next/link"
import { useState } from "react"

export default function Counter() {
    const buttonStyle = "border border-black rounded-md p-1 hover:bg-gray-300"

    // Add "add amount" button and its logic
    const [amount, setAmount] = useState(0)


    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>


            <div className="flex flex-col items-start gap-2 m-2">

                <p className="text-2xl">Count: {count}</p>

                <button
                    onClick={() => dispatch(increment())}
                    className={buttonStyle}
                >
                    Increment
                </button>


                <button
                    onClick={() => dispatch(decrement())}
                    className={buttonStyle}
                >
                    Decrement
                </button>

                <div className="flex gap-2">
                    <button
                        onClick={() => dispatch(incrementByAmount(amount))}
                        className={buttonStyle}
                    >
                        Add by amount
                    </button>
                    <input
                        type="text"
                        placeholder="Amount"
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="border border-black rounded-sm p-1 w-28"
                    />
                </div>
            </div>

            <div>
                <Link href={"/about"}>
                    About Page
                </Link>
            </div>
        </div>
    )
}
