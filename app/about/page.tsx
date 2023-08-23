import Count from "@/components/Count";
import Link from "next/link";


export default function AboutPage() {
  return (
    <div className="m-2">
      <Count />


      <Link href={"/"} className="text-blue-600 text-lg">
        Home Page
      </Link>

    </div>
  )
}

