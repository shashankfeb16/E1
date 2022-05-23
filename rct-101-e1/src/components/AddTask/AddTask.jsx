import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addtodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue] = useState("")
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Write Something" onChange={(e)=>{setValue(e.target.value)}}/>
      <button data-cy="add-task-button" onClick={()=>{addtodo(value);
        console.log(value);
        setValue("")}}>+</button>
    </div>
  );
};

export default AddTask;
