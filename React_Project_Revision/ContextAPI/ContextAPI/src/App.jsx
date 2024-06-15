import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextAPI'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className='bg-[#212121] min-h-screen w-full flex flex-col gap-4 items-center justify-center'>
        <div className='text-green-200 text-3xl'>Salaam</div>
        <Login></Login>
        <Profile></Profile>
      </div>
    </UserContextProvider>
  )
}

export default App
