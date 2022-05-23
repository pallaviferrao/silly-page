import React, { useRef } from "react"
import "./todo.css"
interface Todo {
    todo:string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<Todo> =({todo,setTodo,handleAdd})=>{
    const inputRef = useRef<HTMLInputElement>(null)
    return <form>
        <input  ref = {inputRef} type="input" value={todo} onChange={(e)=>{setTodo(e.target.value)}} className="input__box"></input>
        <button className="input_submit" type="submit" onClick={(e)=>{
            handleAdd(e)
                inputRef.current?.blur()}}
        ></button>
        </form>
}
export default InputField