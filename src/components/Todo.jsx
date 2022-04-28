import React,{useState} from 'react'
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {AiOutlineCheckCircle,AiFillCheckCircle} from 'react-icons/ai'
import {MdDeleteOutline} from 'react-icons/md'

function Todo({todos,completeTodo,removeTodo,unfold}) 
{

    var todosUnfinished=todos.filter(todo=>todo.isComplete===false)//未完成的todo
    var todosFinished=todos.filter(todo=>todo.isComplete===true)//已完成的todo

    const tasksUnfinished = todosUnfinished.map((todo,index) => (       //已完成的任务列表
        <div className='todo-row hvr-grow hvr-fade' key={index}>
            <AiOutlineCheckCircle className='done-icon hvr-pulse-shrink'  onClick={() => completeTodo(todo.id)}/>
            <Link className='todoText' key={todo.id} onClick={()=>unfold(todo)} to='./detail'>{todo.text}</Link> 
            <MdDeleteOutline className='delete-icon hvr-pulse-shrink' onClick={()=>removeTodo(todo.id)} />
        </div>
    ))

    const tasksFinished = todosFinished.map((todo,index) => (       //未完成的任务列表
        <div className='todo-row complete hvr-grow' key={index}>
            <AiFillCheckCircle className='done-icon hvr-pulse-shrink' onClick={() => completeTodo(todo.id)} />
            <Link className='todoText' key={todo.id} onClick={()=>unfold(todo)} to='./detail'><s>{todo.text}</s></Link> 
            <MdDeleteOutline className='delete-icon hvr-pulse-shrink' onClick={()=>removeTodo(todo.id)} /> 
            <Outlet/>                 
        </div>
    ))


  return (
      <div>
          <div>{tasksUnfinished}</div>
          <br/>
          <div>{tasksFinished}</div>
      </div>
  )
}

export default Todo