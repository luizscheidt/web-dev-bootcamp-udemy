import { useState } from "react"

function SignUpForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const updateFirstName = (evt) => {
       setFirstName(evt.target.value)
    }
    const updateLastName = (evt) => {
       setLastName(evt.target.value)
    }
    return (
        <div>
            <label htmlFor="firstName">Enter your first name</label>
            <input type="text" placeholder="firstName" value={firstName} onChange={updateFirstName} id="firstName"/>
            <label htmlFor="lastName">Enter your last name</label>
            <input type="text" placeholder="lastName" value={lastName} onChange={updateLastName} id="lastName"/>
            <button>Submit</button>
        </div>
    )
}


export default SignUpForm;