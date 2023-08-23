import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "John",
        age: 21,
    },
    {
        id: 2,
        name: "Doe",
        age: 22,
    },
    {
        id: 3,
        name: "Smith",
        age: 23,
    },

]

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams
    const id = params.get("id")

    try {
        if (id) {
            const index = Number(id);
            const userDetail = data[index]

            return NextResponse.json(userDetail)
        } else {
            return NextResponse.json({ message: "Provide id" })
        }

    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong", err: error },
            { status: 500, }
        )
    }
}
