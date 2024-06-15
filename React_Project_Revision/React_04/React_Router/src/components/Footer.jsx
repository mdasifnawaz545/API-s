import React from 'react'
import Social from './Social'
import FooterCard from './FooterCard'
function Footer() {
    return (
        <div className='dark:bg-[#212121] dark:text-white w-full min-h-36 bg-white bottom-0 border-t-2 shadow-lg flex flex-col  justify-center'>
            <div className='flex items-center justify-between px-2 flex-wrap'>
                <div className='w-1/2 my-2'><p>Your <span className='text-green-500'>Logo</span> </p></div>
                <div className='flex gap-2 p-1 mb-2 mt-1'>
                    <FooterCard param1={"Resources"} param2={"Home"} param3={"About"}/>
                    <FooterCard param1={"Follow Us"} param2={"Github"} param3={"Discord"}/>
                    <FooterCard param1={"Legal"} param2={"Privacy Policy"} param3={"Terms & Condition"}/>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between'>
                <p>&copy; 2024MOHAMMADASIFNAWAZ. All Rights are Reserved</p>
                <Social></Social>
            </div>
        </div>
    )
}

export default Footer