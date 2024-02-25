import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm"


export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: 1, product: "Bananas", quantity: 12},
        {id: 2, product: "Milk", quantity: 3},
    ])
    const addItem = (item)=> {
        setItems(currentItems => {
            return [...currentItems, {...item, id: 9}]
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