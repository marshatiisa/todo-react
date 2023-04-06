import React from 'react';
import { useState, useEffect } from 'react';

function App2(props) { 
    const [todos, setTodos] = useState([])
    const todoList = todos.map((todo) => <p style={{textDecoration: todo.completed ?'none':'line-through'}}>{todo.title}</p> )

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
            const data = await response.json()
            console.log(data)
            setTodos(data)
        }
        fetchData()
    }, [])
    return (
        <section>
        {todoList}
        </section>
    )
}

export default App2;