import React from 'react'
import useCurrency from '../hooks/useCurrency'
function Button({buttonName,stylesheet}) {
  return (
    <button onClick={()=>{useCurrency()}} className=
    {`bg-blue-700 p-1 text-white px-2 rounded-md -my-2 z-10 ${stylesheet}`}>{buttonName}</button>
  )
}

export default Button