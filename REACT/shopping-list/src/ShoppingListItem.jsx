export default function ShoppingListItem({ item, quantity, completed }){
    const styles = {color: completed ? "black":  "grey", 
    textDecoration: completed ? 'none' : 'line-through'}
    return (
        <li key={item.id} style={styles}>
            {item} - {quantity}
        </li>
            )
}