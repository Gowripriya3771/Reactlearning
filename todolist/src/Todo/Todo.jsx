import React, { useState } from "react";
import "./Todo.css";

function Todo() {
    const[input,setInput]=useState([])
    const[todoList,setTodoList]=useState("")
    function handleClick(){
        setTodoList(input)
        // setTodoList(...todoList,input)
        console.log(todoList)
    }
  return (
    <div className="todo">
      <h1>To-Do-List</h1>
      <div className="input">
        <input type="text" placeholder="Add your task here" onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={handleClick}>Add task</button>
      </div>
      <div>
        <h1>{todoList}</h1>
        {/* <h1>{todoList.map((item)=>{
            item})}</h1> */}
      </div>
    </div>
  );
}

export default Todo;
