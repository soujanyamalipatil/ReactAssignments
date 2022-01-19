import React from 'react'

function TodoList({todos,settodos,initialTodo,setinitialTodo}) {
    const completeTodo=(index)=>{
        console.log(index)
        if(index>=0&&index<todos.length){
            const todosCopy=[...todos]
            todosCopy[index].completed=!todosCopy[index].completed
            settodos(todosCopy)
        }
    }
    const deleteTodo=(index)=>{
        const todosCopy=[...todos]
        const filteredTodos=todosCopy.filter((todo,i)=>{
            return i!==index
        })
        settodos(filteredTodos)
    }
    return (
        <div>
            <div>
{todos.length>0?todos.map((todo,index)=>{
return<div key={index}>
<span style={todo.completed?{textDecoration:'line-through'}:{}}>{todo.task}</span>
<button onClick={()=>{completeTodo(index)}}>completed</button>
<button onClick={()=>{deleteTodo(index)}}>Delete</button>
</div>
}):'no todos...'

}
        </div>
        </div>
    )
}

export default TodoList
