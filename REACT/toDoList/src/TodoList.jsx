import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

const getInitialData = () => { 
    const data = JSON.parse(localStorage.getItem('todos'))
    if(!data){return []}
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(()=> {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    }, [todos]) 

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id!== id)
        })
    }

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((t) => {
            if(t.id === id){
                return {...t, completed: !t.completed}
            } else {
                return t;
            } })
        } )
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {text: text, id: crypto.randomUUID() , completed: false}]
        })
    }

    return (
       <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3
        }}>
          <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            To Dos
          </Typography>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                removeTodo={()=> removeTodo(todo.id)} 
                toggleTodo={()=> toggleTodo(todo.id)}
                />
            })
            }
            <TodoForm addTodo={addTodo}/>
        </List>
       </Box>
    )
}


// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
        
//       })}
//     </List>
//   );
// }
