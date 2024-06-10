import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {

  let [color, setColor] = useState('green')

  const changeColor = (event) => {
    setColor((currColor) => (currColor = event.target.name))
    console.log(color)
  }

  return (
    <div>
      <div className='flex p-0 m-0 inset-0 justify-center items-end h-screen mt-0 transition-all duration-500 w-full' style={{ backgroundColor: color }}>
        <div className='mb-12 bg-white p-4 rounded-lg shadow-lg'>
          <button onClick={changeColor} name="blue" className='bg-blue-800 w-16 text-white h-8 p-1 rounded-full mr-12 leading-3 shadow-lg outline-emerald-400 outline mx-2'>Blue</button>
          <button onClick={changeColor} name="skyblue" className='bg-blue-300 w-16 text-white h-8 p-1 rounded-full mr-12 leading-3 shadow-lg outline-emerald-400 outline mx-2'>Sky</button>
          <button onClick={changeColor} name="yellow" className='bg-yellow-400 w-16 text-white h-8 p-1 rounded-full mr-12 leading-3 shadow-lg outline-emerald-400 outline mx-2'>Yellow</button>
          <button onClick={changeColor} name="pink" className='bg-pink-700 w-16 text-white h-8 p-1 rounded-full mr-12 leading-3 shadow-lg outline-emerald-400 outline mx-2'>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
