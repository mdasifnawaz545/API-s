import React from 'react'
import InputField from './InputField'
import Button from './Button'
import { useParams } from 'react-router-dom'
function About() {
    let {query}=useParams();
    return (
        <div className='bg-green-50 min-h-screen'>
        <div className='flex justify-around items-center min-h-screen'>
        
            <div className='p-4 bg-green-200 flex flex-col gap-3 rounded-md '>
                <p className='text-lg font-bold'>Get in touch:</p>
                <p>Fill in the form to start a conversation</p>
                <p><img src="../Images.facebook.png" width={25} alt="" />Bhubaneswar,Odisha</p>
                <p><img src="../Images.facebook.png" width={25} alt="" />+ 91 7845961245</p>
                <p><img src="../Images.facebook.png" width={25} alt="" />info@kiit.ac.in</p>
            </div>
            <div className='flex flex-col gap-3'>
                <InputField placeHolder={"Full Name"} value={query}></InputField>
                <InputField placeHolder={"E-mail"}></InputField>
                <InputField placeHolder={"Telephone Number"}></InputField>
                <Button buttonName={"Submit"} className={"text-white w-20 flex justify-center items-center px-4"} ></Button>
             </div>
            
        </div>
        </div>

    )
}

export default About