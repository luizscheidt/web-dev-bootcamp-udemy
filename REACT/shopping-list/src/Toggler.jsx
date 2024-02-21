import { useState } from "react";
import "./Toggler.css"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0)
    const changeMood = () => setIsHappy(!isHappy)
    return (
        <div>
            <p className="Toggler" onClick={changeMood}>I am {isHappy ? 'Happy' : 'Sad'} right now</p>
            <p>{count} </p>
            <button onClick={()=> setCount(count+1)}>+</button>
        </div>
        )
}