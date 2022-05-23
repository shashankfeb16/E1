import React from "react";
import TaskApp from "./components/TaskApp";
import data from './data/tasks.json'

function App() {
  return <div>
    <TaskApp data={data}></TaskApp>
  </div>;
}

export default App;
