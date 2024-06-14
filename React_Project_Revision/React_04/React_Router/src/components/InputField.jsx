import React from 'react'

function InputField({placeHolder}) {
  return (
    <input type="text" placeholder={placeHolder} className='p-2 rounded-md outline-none border border-gray-400 w-38 h-10 bg-white  '/>
  )
}

export default InputField