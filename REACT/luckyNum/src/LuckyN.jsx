import Dice from "./Dice";
import { useState } from "react";
import { getRolls, sum } from "./utils";

export default function LuckyN({numDice=2, target=7}){
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) === target;
    const roll = ()=>{
        setDice(getRolls(numDice))
    }
    return (
        <main className="LuckyN">
            <h1>Lucky{target}</h1>
            <Dice dice={dice}/>
            {isWinner && <h2>You Won!!</h2>}
            <button onClick={roll}>Roll the dice again</button>
        </main>
    )
}