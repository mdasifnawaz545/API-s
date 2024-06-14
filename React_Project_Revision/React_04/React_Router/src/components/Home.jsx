import React from 'react'
import Button from './Button'

function Home() {
  return (
    <div className='w-full flex justify-between flex-col min-h-screen bg-green-50'>
      <div className='flex-grow mt-14'>
        <div className='flex justify-around items-center mt-8'>
          <div>
            <img src="./Images/3675931.jpg" alt="" width={400} />
          </div>
          <div className='flex flex-col items-end' >
            <p>Download Now</p>
            <p>Start Here</p>
            <Button buttonName='Download Now' className={"text-white"} ></Button>
          </div>

        </div>
        <div className='px-2 p-2 text-justify flex justify-center items-center flex-col'>
          <p  className='text-xl font-bold'><span className='text-3xl text-green-500'>What</span> are You looking for <span className='text-3xl text-green-500'>?</span></p>
          <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro voluptatem debitis vitae recusandae natus qui sunt. Minus architecto natus nesciunt labore deleniti molestias!</p>
          <img src="./Images/3918929.jpg" width={500} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home