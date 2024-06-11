import { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button';


function App() {
  const currencyArr = ["inr", "pkr", "riyal"];

  return (
    <div className='w-full h-screen flex justify-center items-center' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1631943406801-ba6ccfa4f682?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>

      <div className='rounded-md flex flex-col justify-center items-center bg-slate-300 p-4 '>

        <Card cardType="From" currArray={currencyArr}></Card>
        <Button buttonName={"Swap"}></Button>
        <Card cardType="To" currArray={currencyArr}></Card>
        <br />
        <Button buttonName={"Convert USD to INR"} stylesheet={"w-full mb-0.5 p-2"}/>



      </div>
    </div>
  )
}

export default App
