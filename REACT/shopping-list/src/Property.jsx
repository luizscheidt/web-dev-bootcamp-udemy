export default function Property({ name, rating, price, id }) {
    return (
        <div key={id}>
            <h2>{name}</h2>
            <h2>${price} a night</h2>
            <h3>{rating} ⭐</h3>
        </div>
    )
} 