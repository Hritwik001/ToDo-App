"use client"
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const page = () => {

  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setMainTask([...mainTask, { id: uuidv4(), task, desc }])

    setTask("")
    setDesc("")
    console.log(mainTask)

  }

  const handleDelete = (id) => {
    setMainTask(mainTask.filter(task => task.id !== id));
  };

  let renderTask = <h2>No Tasks Available</h2>;


  if (mainTask.length > 0) {
    renderTask = mainTask.map((t) => {
      return <li className="list-none flex  justify-between mb-8" key={t.id}>
        <div className="flex  justify-between mb-5 w-2/3">
          <h5 className='text-2xl font-semibold'>{t.task}</h5>
          <h6 className='text-2xl font-semibold'> {t.desc}</h6>


        </div>
        <button
          onClick={() => {
            handleDelete(t.id)
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
        >
          Delete
        </button>

      </li>


    })
  }
  return (
    <div>
      <div className="bg-gray-900 py-4 text-white text-center">
        <h1 className="text-3xl font-bold">Hritwik's Todo List</h1>

      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black rounded-md px-4 py-2 mx-4 my-4"
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
        />

        <input
          className="border border-black rounded-md px-4 py-2 mx-4 my-4"
          type="text"
          placeholder="Enter Task Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-4">
          Add Task
        </button>
      </form>

      <hr className='my-5' />

      <div className='p-8 bg-slate-200'>
        {renderTask}

      </div>
    </div>
  )
}

export default page

