import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import App2 from './App2';


const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
    {/* <App2 /> */}
  </React.StrictMode>
);

