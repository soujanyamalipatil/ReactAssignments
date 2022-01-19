import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function TodoApp() {
    const [todos, settodos] = useState([])
    const [initialTodo,setinitialTodo]=useState({
        task:'',
        completed:false
    })
    return (
        <Router>
            <div>
                <div style={{display:'flex',justifyContent:'space-evenly'
            }}>
                    <h4><Link to='/addtodo' style={{marginLeft:'0px'}}>AddTodo</Link></h4>
                    <h4> <Link to='/todolist' style={{marginLeft:'0px'}}>TodoList</Link></h4>
                </div><br></br><br></br><br></br>
                <Route exact path='/AddTodo'>
           <AddTodo todos={todos} settodos={settodos} initialTodo={initialTodo} setinitialTodo={setinitialTodo}/>
            </Route>
            <Route exact path='/TodoList'>
            <TodoList todos={todos} settodos={settodos} initialTodo={initialTodo} setinitialTodo={setinitialTodo}/>
            </Route>
        </div>
        </Router>
    )
}

export default TodoApp
