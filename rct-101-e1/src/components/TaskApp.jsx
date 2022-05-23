import React, { useState } from "react";
import TaskHeader from '../components/TaskHeader/TaskHeader'
import AddTask from '../components/AddTask/AddTask'
import Tasks from "./Tasks/Tasks";
import Task from './Task/Task'
import styles from "./taskApp.module.css";


const TaskApp = ({data}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[todos,setTodos] = useState([]);
  const addtodo=(text)=>{
    setTodos([...todos,{
      id: Date.now(),
      value: text
    }])
  }
  const deleteTodo = (value)=>{
    setTodos(todos.filter((todo)=>todo.value != value))
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader></TaskHeader>
      <AddTask addtodo={addtodo}></AddTask>
      <Tasks>
          {data.map((e)=>{
             return <Task value={e.text}  key={e.id} deleteTodo={deleteTodo} ></Task>
          })}
          {todos.map((todo)=>{
            return <Task value={todo.value}  key={todo.id} deleteTodo={deleteTodo}></Task>
          })}
      </Tasks>
    </div>
  );
};

export default TaskApp;
