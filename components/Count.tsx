"use client"
import { useAppSelector } from "@/redux/hooks";

export default function Count() {
    const count = useAppSelector((state) => state.counter.value);

    return (
        <p className="text-2xl">Count: {count}</p>
    )

}