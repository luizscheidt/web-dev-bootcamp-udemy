import { useState } from "react"

export default function BetterSignUpForm(){
        const [formData, setFormData] = useState({
            firstName: "",
            lastName: ""
        })
        const handleChange = (evt) => {
            const changeField = evt.target.name;
            const newValue = evt.target.value;
            setFormData(currentData => {
                return {
                    ...currentData,
                    [changeField]: newValue,
                }
            })
        }

        const handleSubmit = ()=>{
            console.log(formData)
        }
        return (
            <div>
                <label htmlFor="firstName">Enter your first name</label>
                <input type="text" placeholder="firstName" value={formData.firstName} onChange={handleChange} name="firstName" id="firstName"/>
                <label htmlFor="lastName">Enter your last name</label>
                <input type="text" placeholder="lastName" value={formData.lastName} onChange={handleChange} name="lastName" id="lastName"/>
                <label htmlFor="password">Enter your password</label>
                <input type="password" placeholder="password" value={formData.password} onChange={handleChange} name="password" id="password"/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        )
    }
