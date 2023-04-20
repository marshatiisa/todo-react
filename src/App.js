import React from 'react';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App(props) {
  const [tasks, setTasks] = useState([]);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks[0])
  }
  
  const taskList = tasks.map((task) => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key = {task.id}
    toggleTaskCompleted={toggleTaskCompleted}
     />
  ));  

  // created an add task function
  function addTask(name){ // changed task to name
    //setTasks([...tasks, {id: 'id', name, completed: false}]);
    const newTask = {id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    //console.log('should add task', task)
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;



  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
     <Form addTask={addTask}/>
     <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;