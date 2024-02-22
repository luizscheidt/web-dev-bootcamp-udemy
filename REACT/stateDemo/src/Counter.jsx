import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={()=> setCount(currentCount => currentCount + 1)}> + </button>
        </div>
    )
}