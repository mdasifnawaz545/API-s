import React from 'react'

function Card({ cardType, currArray }) {
    
    return (
        <div className=' w-96 h-24  bg-white rounded-lg flex justify-around items-center '>
            <div className='flex  flex-col gap-3'>
                <label htmlFor="inputField">{cardType}</label>
                <input type="number" id='inputField' className='outline-none h-8 px-2 border w-32 rounded-lg' />
            </div>

            <div className='flex flex-col gap-3 justify-end items-end'>
                <label htmlFor="selectField">Currency type</label>
                <select type="number" id='selectField' className='w-16 outline-none bg-gray-100 h-7 border-2 border-blue-200 rounded-lg'>
                {
                    currArray.map((el)=>(
                        <option value={el}>{el}</option>
                    ))
                }
                    
                </select>
            </div>


        </div>
    )
}

export default Card