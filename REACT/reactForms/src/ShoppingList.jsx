import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm"

import {v4 as uuid} from "uuid"


export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: uuid(), product: "Bananas", quantity: 12},
        {id: uuid(), product: "Milk", quantity: 3},
    ])
    const addItem = (item)=> {
        setItems(currentItems => {
            return [...currentItems, {...item, id: uuid()}]
        })
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}