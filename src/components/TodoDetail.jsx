import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'

function TodoDetail() {
  const todo=JSON.parse(localStorage.getItem('unfoldTodo'))

    var yAdded=new Date(todo.timeAdded).getFullYear()
    var mAdded=new Date(todo.timeAdded).getMonth()+1
    var dAdded=new Date(todo.timeAdded).getDate()
    var hAdded=new Date(todo.timeAdded).getHours()
    var minAdded=new Date(todo.timeAdded).getMinutes()

    var yComplete=new Date(todo.timeComplete).getFullYear()
    var mComplete=new Date(todo.timeComplete).getMonth()+1
    var dComplete=new Date(todo.timeComplete).getDate()
    var hComplete=new Date(todo.timeComplete).getHours()
    var minComplete=new Date(todo.timeComplete).getMinutes()
  return (
    <div className='todo-app-detail'>
        <h1>To-do</h1>
        <Link to={'../'}><IoIosArrowBack className='back-icon hvr-backward'/></Link>
        <br/>
        <div className='text-detail-wrap'>
          <div className='text-detail'>{todo.text}</div>
          <br/><br/><br/>
          <div className='detail-info '>
            <div className='hvr-forward'>ID: {todo.id}</div><br/>
            <div className='hvr-forward'>创建于 {yAdded}年{mAdded}月{dAdded}日 {hAdded<10?'0'+hAdded.toString():hAdded}:{minAdded<10?'0'+minAdded.toString():minAdded}</div>
            <div>{todo.isComplete?<div>完成于 {yComplete}年{mComplete}月{dComplete}日 {hAdded<10?'0'+hAdded.toString():hAdded}:{minComplete<10?'0'+minComplete.toString():minComplete}</div>:<div className='hvr-forward'>未完成</div>}</div>        
          </div>
          
        </div>
    </div>
  )
}

export default TodoDetail