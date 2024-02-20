export default function SlotMachine({v1, v2, v3}){
    const isWinner = v1 === v2 && v1 === v3;
    const styles = isWinner ? {color: "green"} : {color: "red"}
    return (
        <div className="SlotMachine" style={styles}>
            <h1>{v1} {v2} {v3}</h1>
            {isWinner ? <h2>You won</h2> : <h2>You lost</h2> }
            {isWinner && <h3>Congrats!</h3>}
        </div>
    )
}