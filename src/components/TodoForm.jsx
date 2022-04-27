import React,{ useState } from 'react'
import {v4 as uuid} from 'uuid'//v4:随机uuid

function TodoForm(props) {
    
    const [input,setInput]=useState('') //input默认值为‘ ’

    const handleChange = e=>{
      setInput(e.target.value)//Input State实时获取输入框值
    }

    const handleSubmit = e =>{
      e.preventDefault()//防止默认刷新
      props.onSubmit({//传入onSubmit的数据
        id: uuid(), //导入uuid包生成任务id
        text: input,
        timeAdded:Date(),
        isComplete:false,
        timeComplete:' '
      });
      setInput('')//点击完成后清空输入框
    }




  return (   
      <form className="todo-form" onSubmit={handleSubmit}>
           <input 
            type="text" 
            placeholder="添加任务"
            value={input}
            name="text"
            className="todo-input hvr-back-pulse"
            onChange={handleChange}    
            onSubmit={handleSubmit}      
          />
          <div className="todo-button hvr-sweep-to-right" onClick={handleSubmit}>确定</div>
      </form>
  )
}

export default TodoForm