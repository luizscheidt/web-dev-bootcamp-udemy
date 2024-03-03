import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';

const initialTodos = [
    {id: 1, text: "Walk the dog", completed: false},
    {id: 2, text: "Walk the cat", completed: false},
    {id: 3, text: "Walk the fish", completed: true},
    {id: 4, text: "Walk the bull", completed: true},
    ]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

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
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} removeTodo={()=> removeTodo(todo.id)} toggleTodo={()=> toggleTodo(todo.id)} />
            })
            }
        </List>
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
