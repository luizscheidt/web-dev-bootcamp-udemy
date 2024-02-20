export default function ShoppingList({items}) {
    return (
        <>
        <ul>
            {items.map(i => 
            <li style={{color: i.completed ? "black":  "grey", 
                        textDecoration: i.completed ? 'none' : 'line-through'}}>
                {i.item} - {i.quantity}
            </li>
            )}
        </ul>
        </>
    )
}