"use client"
import Header from "@/components/Header"
import { useAppSelector } from "@/redux/hooks"
import { getData } from "@/components/Display"
import { useEffect, useState } from "react"
import { User } from "@/lib/users"

export default function User() {
    const index = useAppSelector((state) => state.user.value);
    const [data, setData] = useState<User | null>(null); // State to hold fetched data

    useEffect(() => {
        // Fetch data when the component mounts
        async function fetchData() {
            try {
                const result = await getData(index);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [index]); // Fetch data whenever 'index' changes

    return (
        <div className="m-2">
            <Header />
            {data && <Display name={data.name} />}
        </div>

    );

}

function Display({ name }: { name: string }) {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}