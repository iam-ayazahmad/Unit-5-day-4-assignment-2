import { useState } from "react"
import {Myinput} from "./Todoinput"
import {nanoid} from "nanoid"
import {Todoitem} from "./Todoitem"
import "../../src/App.css"
import { Todoitemc } from "./Todoitemc"

const Todo=()=>{
    const[todolist,setTodolist]=useState([])
    const [completed, setCompleted] =useState()

    const getdata=(data)=>{

        const payload={
            title:data,
            status:false,
            id:nanoid(5)
        }
        setTodolist([...todolist,payload])
    }


    const handlestatus=(id)=>{
        console.log(id)
        
        setTodolist(
            todolist.map((e)=>(e.id===id ? {...e,status:!e.status}:e))
        )
    }
    const [showcom,setShowcom]=useState(true)

    
    return(
        
        <div>
        
        {todolist.map((e)=>{
            return (e.status==false ? <Todoitem handlestatus={handlestatus} todo={e}/>: null)
        })}
        <Myinput getdata={getdata}/>
        <button onClick={()=>{setShowcom(!showcom)}}>{showcom?"hide completed":"show completed"}</button>

        


        {todolist.map((e)=>{
            return (e.status==true && showcom ? <Todoitemc handlestatus={handlestatus} todo={e}/>: null)
        })}
        </div>
        
    )


}

export {Todo}