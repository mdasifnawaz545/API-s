import React, { useContext, useState } from 'react';
import UserContextProvider from '../context/UserContextAPI';
import UserContext from '../context/UserContext';
function Login() {
    let [username, setUsername] = useState('')
    let [password, setpassword] = useState('')


    let { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        setUser({ username, password });
    }

    return (
        <div className='flex items-center justify-center gap-4'>
            <p className='text-green-300'>Login</p>
            <input type="text" placeholder='username' name='username' value={username} onChange={(e) => { setUsername((prev) => (prev = e.target.value)) }} />
            <input type="text" placeholder='password' name='password' value={password} onChange={(e) => { setpassword((prev) => (prev = e.target.value)) }} />
            <button onClick={() => { handleSubmit() }} className='text-green-300'>Log In</button>
        </div>
    )
}

export default Login