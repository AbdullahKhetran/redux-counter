import Link from "next/link"

export default function Header() {
    return (
        <div className="flex gap-4 text-lg">
            <Link href={"/"} className="text-blue-600 text-lg">
                Home
            </Link>
            <Link href={"/about"} className="text-blue-600 text-lg">
                About
            </Link>
            <Link href={"/user"} className="text-blue-600 text-lg">
                User
            </Link>

        </div>
    )
}
