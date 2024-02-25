import { useState } from "react";

export default function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    });
    const handleChange = (evt) => {
        setFormData(currentData => {
            return {
                ...currentData,
                [evt.target.name]: evt.target.value
            }
        }) 
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addItem(formData);
        setFormData({
            product: "",
            quantity: 0
        })
    }
    return (
        <div>
            <h1>You're adding {formData.quantity} {formData.product} to your list</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product">Product name</label>
                <input type="text" name="product" id="product" onChange={handleChange} value={formData.product} placeholder="product name" />
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" id="quantity" onChange={handleChange} value={formData.quantity} placeholder="quantity" />
                <button>Submit</button>
            </form>
        </div>
    )
}