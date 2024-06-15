import React, { useContext } from 'react'
import UserContextProvider from '../context/UserContextAPI'
import UserContext from '../context/UserContext';

function Profile() {
    let {user}=useContext(UserContext);
    return (
        <div className='flex flex-col items-center justify-center text-green-200'>
            <p>Profile</p>
            <p>Username: <span className='font-bold'>{user.username}</span></p>
            <p>Password : <span className='font-bold'>{user.password}</span></p>
        </div>
    )
}

export default Profile