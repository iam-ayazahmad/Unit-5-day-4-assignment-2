import "../../src/App.css"
const Todoitemc=({todo,handlestatus})=>{
    return  <div className="completed"> {todo.title} "Completed"<button onClick={()=>handlestatus(todo.id)}>Toogle</button></div>
}
export {Todoitemc}
