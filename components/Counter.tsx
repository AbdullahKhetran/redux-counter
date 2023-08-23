"use client"

import { decrement, increment, incrementByAmount, reset } from "@/redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import Link from "next/link"
import { useState } from "react"
import Count from "./Count"
import Header from "./Header"

export default function Counter() {
    const buttonStyle = "border border-black rounded-sm p-1 hover:bg-gray-300"

    // Add "add amount" button and its logic
    const [amount, setAmount] = useState(0)


    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className="m-2">

            <Header />

            <div className="flex flex-col items-start gap-2 m-2">


                <Count />

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

                <button
                    onClick={() => dispatch(reset())}
                    className={buttonStyle}
                >
                    Reset
                </button>
            </div>


        </div>
    )
}
