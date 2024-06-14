import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    let {query}=useParams();
  return (
    <div className='flex justify-center bg-green-50 items-center min-h-screen'>
        <p>User sends a Query : {query}</p>
    </div>
  )
}

export default User