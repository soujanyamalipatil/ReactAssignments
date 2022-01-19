import React from 'react'

function AddTodo({todos,settodos,initialTodo,setinitialTodo}) {
    const addTodo=()=>{
        const todosCopy=[...todos]
        const index=todosCopy.findIndex((todo)=>{
            return todo.task===initialTodo.task
        })
        console.log(index);
        if(index===-1){
            todosCopy.push(initialTodo)
            settodos(todosCopy)
        }else{
            console.error('to do already exists')
        }
    }
    const handleChange=(event)=>{
        const initialTodoCopy={...initialTodo}
            initialTodoCopy.task=event.target.value
            initialTodoCopy.completed=false;
            setinitialTodo(initialTodoCopy)
    }
    return (
        <div>
            <div>
          <input type='text'name='task' value={initialTodo.task} onChange={(event)=>{
               handleChange(event)
           }}></input>
           <button onClick={()=>{
               addTodo()
           }}>Add</button> 
          </div>
            
        </div>
    )
}

export default AddTodo
