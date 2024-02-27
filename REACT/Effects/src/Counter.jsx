import { useState, useEffect } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(function myEffect() {
       console.log('My effect was called') 
    }, [count])
    const increment = () => {
        setCount((c) => c + 1);
    }
    const handleChange = (evt) => {
        setName(evt.target.value);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Click me</button>
            <p>{name}</p>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}