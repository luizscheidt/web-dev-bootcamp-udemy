import "./Box.css"
import { useState } from "react"

const randomColor = (colors) => {
    let idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}

export default function Box({colors}){
    const [color, setColor] = useState(randomColor(colors))
    const changeColor = () => {
        setColor(randomColor(colors))
    }
    return (
            <div className="Box" style={{backgroundColor: color}} onClick={changeColor}></div>
    )
}