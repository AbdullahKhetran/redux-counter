"use client"

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function AboutPage() {
  const count = useAppSelector((state) => state.counter.value)
  return (
    <div>
      <div className="m-2">
        <h1>This is about page</h1>
        <p>The counter value is <strong>{count}</strong></p>
      </div>

      <div className="m-2">
        <Link href={"/"} className="text-blue-600 text-lg">
          Home Page
        </Link>
      </div>
    </div>
  )
}

