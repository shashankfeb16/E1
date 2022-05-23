import React from "react";
import { useState } from "react";
import Counter from '../Counter/Counter'
import styles from "./task.module.css";

const Task = ({value,deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      {value}
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter></Counter>
      <button data-cy="task-remove-button" onClick={()=>{deleteTodo(value)}}>Delete</button>
    </li>
  );
};

export default Task;
