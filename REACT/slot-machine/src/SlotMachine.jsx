import "./SlotMachine.css"
import DefineSlots from "./DefineSlots";

export default function SlotMachine({values}){
    // let newList = []
    // for(let value of values) {
    //     newList.push(value)
    // }

    // const isWinner = newList === values;
    // const styles = isWinner ? {color: "green"} : {color: "red"}
    // console.log(isWinner)
    const isWinner = values[0] === values[1] && values[0] === values[2]
    console.log(values[1])
    console.log(values[2])
    console.log(values[3])
    console.log(values.length)
    
    return (
        <div className="SlotMachine">
            <h1>{values}</h1>
            {isWinner ? <h2 className="gradientGreen">You woooonnnn!!</h2> : <h2>You lost</h2> }
            {isWinner && <h3>Congrats!</h3>}
        </div>
    )
}