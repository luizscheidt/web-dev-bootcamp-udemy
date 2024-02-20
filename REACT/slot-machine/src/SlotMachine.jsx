import "./SlotMachine.css"

export default function SlotMachine({v1, v2, v3}){
    const isWinner = v1 === v2 && v1 === v3;
    // const styles = isWinner ? {color: "green"} : {color: "red"}
    return (
        <div className="SlotMachine">
            <h1>{v1} {v2} {v3}</h1>
            {isWinner ? <h2 className="gradientGreen">You woooonnnn!!</h2> : <h2>You lost</h2> }
            {isWinner && <h3>Congrats!</h3>}
        </div>
    )
}