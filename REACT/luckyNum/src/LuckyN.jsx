import Dice from "./Dice";
import { useState } from "react";
import { getRolls, sum } from "./utils";
import Button from "./Button";

export default function LuckyN({title, numDice=2, winFunction}){
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winFunction(dice)
    const roll = ()=>{
        setDice(getRolls(numDice))
    }
    return (
        <main className="LuckyN">
            <h1>{title} </h1>
            <Dice dice={dice}/>
            {isWinner && <h2>You Won!!</h2>}
            <Button action={roll} label="Roll"/>
        </main>
    )
}