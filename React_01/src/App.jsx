import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Button name ="Green"></Button>
    <h1 className='p-5'>H1 TAG</h1>
   </>
  )
}

export default App
