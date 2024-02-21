import React, { useState } from "react";
import "./Todo.css";

function Todo() {
    const[input,setInput]=useState("")
    const[todoList,setTodoList]=useState([])

    // Create ToDo message
    function handleClick() {
      
        setTodoList([...todoList, input])
        // setTodoList(...todoList,input)
        console.log(todoList)
    }

    // Delete ToDo Message
    function deletetodo(item_num) {
        // Code to delete 
        const arr=todoList.filter((item,index)=>{
          if(index === item_num) {
            return false;
          }
          return true;
        })
        
        setTodoList(arr);
    }

    // Update ToDo Message
    function updatetodo(item_num) {
        const msg = prompt("Enter New message: ", "")
      const arr2=  todoList.map((item,index)=>{
          if(index===item_num){
            return msg;
          }
          return item;
        })
        setTodoList(arr2)
    }

  return (
    <div className="todo">
      <h1>To-Do-List</h1>
      <div className="input">
        <input type="text" placeholder="Add your task here" onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={handleClick}>Add task</button>
      </div>
      <div>
        <ol>
          {todoList.map((item, index) => <TodoMessage item={item} del_func={deletetodo} updt_func={updatetodo} index={index}/>)}
        </ol>
      </div>
    </div>
  );
}

const TodoMessage = (props) => {
  return (
      <li>
        <div>
        <p>{props.item} </p>
        <button onClick={()=>{props.del_func(props.index)}}>✖️</button>
        <button onClick={()=>{props.updt_func(props.index)}}>✏️</button>
        </div>
      </li>
  );
}

export default Todo;
