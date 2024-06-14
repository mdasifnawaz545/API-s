import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className='w-full h-[4rem] fixed bg-white shadow-lg'>
            <nav className='px-2 list-none min-w-full min-h-full flex items-center justify-between'>
                <div><li  >Your <span className='text-green-500'>LOGO</span></li></div>
                <div className='flex  lg:visible gap-4  '>
                    <li  ><NavLink to={"/"} className={({ isActive }) => (`hover:text-green-500  duration-300 cursor-pointer`)}>Home</NavLink></li>
                    <li  ><NavLink to={"/about"} className={({ isActive }) => (`hover:text-green-500 duration-300 cursor-pointer`)}>About</NavLink></li>
                    <li ><NavLink to={"/contact"} className={({ isActive }) => (`hover:text-green-500 duration-300 cursor-pointer`)} >Contact</NavLink></li>
                    <li ><NavLink to={"/github"} className={({ isActive }) => (`hover:text-green-500 duration-300 cursor-pointer`)} >Github</NavLink></li></div>
                <div className='flex gap-4'>
                    <Button buttonName='Log In' className={" text-white bg-gray-200 "} />
                    <Button buttonName='Get Started' className={" text-white"} />
                </div>
            </nav>
        </div>
    )
}

export default Header