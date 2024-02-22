import { useState } from "react"
import {v4 as uuid} from "uuid"

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "🤩"}]);
    const addEmoji = () => {
        setEmojis(oldEmojis =>[...oldEmojis, {id: uuid(), emoji: "🤠"}, {id: uuid(), emoji: "😇"}]) 
    };
    const deleteEmoji = (id) => {
        setEmojis(previousEmojis=> {
            return previousEmojis.filter(e => e.id !== id);
        })
    }
    return (
        <div>
            {emojis.map(e => (
                <span onClick={()=> deleteEmoji(e.id)} key={e.id}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji} >Add Emoji</button>
        </div>
    )
}