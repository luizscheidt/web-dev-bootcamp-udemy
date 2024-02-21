import { useState } from "react"

export default function Counter() {
    const [num, setNum] = useState(5);
    return (
        <div>
            <p>The number is: {num} </p>
            <button onClick={()=> setNum(num-1)}> Decrement number </button>
            <button onClick={()=> setNum(num+1)}> Increment number </button>
        </div>
    )
} 