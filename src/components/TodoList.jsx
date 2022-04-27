import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    
    const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('todolist')) || [])//默认从localStorage读取，若读取不到则设为空数组
    
    //addTodo函数接收从todoForm里onSubmit传来的数据
    const addTodo = (todo) =>{ //添加任务
        if(!todo.text || /^\s*$/.test(todo.text)){//如果没有输入或者输入里只有空格
            return//结束
        }
        const newTodos=[todo, ...todos]//新的可变长度的todo数组
        setTodos(newTodos)//将新的todo数组传入state
        console.log(todo,...todos)
        localStorage.setItem('todolist',JSON.stringify(newTodos))//转化为字符串储存
    }

    const removeTodo = id =>{//移除任务
        const removeArr=[...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr)
        localStorage.setItem('todolist',JSON.stringify(removeArr))
    }
    

    const completeTodo = (id) => {//完成任务
        let updatedTodos = todos.map(todo =>{
            if(todo.id===id){
                if(todo.isComplete===false)todo.timeComplete=Date();
                else todo.timeComplete=' ';
                todo.isComplete = !todo.isComplete
            }           
            return todo           
        })
        setTodos(updatedTodos)
        localStorage.setItem('todolist',JSON.stringify(updatedTodos))
    }
    
    const unfold=(todo)=>{
        localStorage.setItem('unfoldTodo',JSON.stringify(todo))
    }

  return (
    <div>
        <TodoForm onSubmit={addTodo} />
        <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            unfold={unfold}
        />
    </div>
  )
}

export default TodoList