import { useState } from "react";

export default function ScoreKeeper({nPlayers, target}) {
    const [scores, setScores] = useState(new Array(nPlayers).fill(0));
    const addScore = (idx)=>{
        setScores((prevScores)=> {
            // const copy = [...prevScores]
            // copy[idx] += 1
            // return copy
            return prevScores.map((score, index) => {
                if (index === idx) {
                  return score+1;
                } else {
                  return score;
                }
              })
        })}

    const reset = () => {
        return setScores(new Array(nPlayers).fill(0))
    }

    return (
        <div>
            <ul>
                
           {scores.map((score, idx)=>
                <li key={idx}>
                    Player {idx + 1}: {score}     
                    <button onClick={()=> addScore(idx)}>+</button>
                    {score >= target && <p>WINNER!!!!</p>}
                </li>
                
           )}
            </ul>
            <button onClick={()=> reset()}>Reset!</button>
        </div>
    )
}



