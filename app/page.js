"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title, settitle] = useState("")
  const [des, setdes] = useState("")
  const [mainTask, setmainTask] = useState([])
  const [counter, setcounter] = useState("")
const submitHandler = (e)=>{
e.preventDefault()
// console.log(title)
// console.log(des)
setmainTask([...mainTask, {title, des}])
settitle("")
setdes("")
};

const DeleteHandler = (i)=> {
  let copydata = [...mainTask]
  copydata.splice(i,1)
  setmainTask(copydata)
 }
 

let renderTask = <h2>No Task Available</h2>
if(mainTask.length>0){
renderTask=mainTask.map((t,i)=>{
  return (
  <li key={i} className='flex items-center justify-between'>
    <div className=' flex items-center justify-between w-2/3'>
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='text-lg font-medium'>{t.des}</h6>
    </div>
    <button 
    onClick={()=>{
      DeleteHandler(i)
    }}
    className='  bg-red-400 text-white font-bold rounded px-2 py-2'>Delete</button>
  </li>
  );
});
}


 
  return (
    <> 
    <h1 className='bg-black  text-white text-center p-5 font-bold text-5xl'>Lunar Todolist</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-2 py-2  ' placeholder='Enter Task here'
        value={title} 
        onChange={(e)=>{
          settitle (e.target.value)
        }}  />
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-2 py-2  ' placeholder='Enter Description here'
       value={des}
       onChange={(e)=>{
        setdes(e.target.value)
       }}
      />
      <button className='bg-black text-white font-bold px-3 py-3 m-5 text-2xl rounded'>Add Task</button>
    
      
    </form>
    <hr/>
    <div className='bg-slate-200 p-8'>
        <ul>
        {renderTask}
        </ul>
      
      </div>
    

    </>
  )
}

export default page