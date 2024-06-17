import React from 'react'

function InputBox() {
  return (
    <div>
        <form className='flex gap-4'>
            <input type="text" className=' rounded-2xl outline-none shadow-lg  w-96 h-10 p-4 hover:scale-105 duration-300 hover:shadow-lg hover:shadow-blue-400 bg-blue-50' placeholder='Add your task'/>
            <button className='bg-blue-500  hover:shadow-2xl shadow-lg  text-white px-6 rounded-2xl hover:scale-105 duration-150'>Add</button>
        </form>
    </div>
  )
}

export default InputBox