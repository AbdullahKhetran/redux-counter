"use client"

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function AboutPage() {
  const count = useAppSelector((state) => state.counter.value)
  return (
    <div>
      <div>
        <h1>This is about page</h1>
        The counter value is {count}
      </div>

      <div>
        <Link href={"/"}>
          Home Page
        </Link>
      </div>
    </div>
  )
}

