import TextField from "@mui/material/TextField"
import { useState } from "react"
import Box from "@mui/material/Box"

export default function FormDemo(){
    const [name, setName] = useState('')
    const updateName = (evt) => {
        setName(evt.target.value)
    }
    return (
    <Box sx={{border: "1px solid red", p:5, mt: 3}}>
        <h1>Name is: {name} </h1>
        <TextField 
            placeholder="Name" 
            id="outlined-basic" 
            label="name" 
            variant="outlined"
            value={name} 
            onChange={updateName}
        />
    </Box>
    )
}