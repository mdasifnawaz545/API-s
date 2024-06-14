import React from 'react'
import { Link } from 'react-router-dom'

function FooterCard({ param1, param2, param3 }) {
    return (
        <div className='mr-8 felx flex-col '>
            <p className='text-sm font-bold uppercase mb-4'>{param1}</p>
            <div className='flex flex-col'>
                <Link to={"#"} className='hover:text-green-500 mb-2'>{param2}</Link>
                <Link to={"#"} className='hover:text-green-500 mb-2'>{param3}</Link>
            </div>

            {/* <p className='text-sm font-bold uppercase mb-4'></p>
            <p className='mb-2'>{param2}</p>
            <p className='mb-2' >{param3}</p> */}

        </div>
    )
}

export default FooterCard