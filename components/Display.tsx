// export default async function Display({ id }: { id: number }) {

//     const result = await getData(id)
//     console.log("Display - result", result)

//     return (
//         <div>
//             <p>{result.name}</p>
//         </div>
//     )
// }

export async function getData(uid: number) {
    const res = await fetch(`http://localhost:3000/api/user?id=${uid}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log("getData - data", data)
    return data
}
