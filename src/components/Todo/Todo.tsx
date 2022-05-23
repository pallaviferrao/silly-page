import React, { useState } from "react";
import "./todo.css"
import InputField from "./InputField"
import {TodoProp} from "./model"
type Person = {
    name:string;
    age?: number
}
let person:Person = {
    name:'Pallavi'
}
const Todo=()=>{
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<TodoProp[]>([])

    const handleAdd = (e:React.FormEvent) => {
        e.preventDefault();
        setTodos([...todos,{id:Date.now(),todo:todo,isdone:false}])
    }
        return (<div>
            <span className="taskify"> Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
            <div>
            {todos.map((t)=>{
               return <li>{t.todo}</li>
            })}
            </div>
        </div>)
}
export default Todo;