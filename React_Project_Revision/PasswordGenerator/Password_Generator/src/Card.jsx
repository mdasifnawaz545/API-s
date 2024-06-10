import React, { useCallback, useState } from 'react'

function Card() {

    const [password, setPassword] = useState(0);
    const [length, setLength] = useState(8);
    const [isNumber, setisNumber] = useState(false);
    const [isCharacter, setisCharacter] = useState(false);

    const passwordGenerator = useCallback(() => {
        let Password = "";
        const num = "0123456789";
        const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const specialChar = "!@#$^%&*()?";
        let str=char;
        console.log(str);
        if(isNumber) str+=num;
        if(isCharacter) str+=specialChar;
        console.log(str);
        console.log(length);
        for (let i = 0; i < length; i++){
        Password += str.charAt(Math.floor(Math.random() * str.length-1))
        }
        console.log(Password)
        setPassword((currPass)=>(currPass=Password));
    }, [setPassword, length, isNumber, isCharacter]);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-3 bg-blue-950'>
            <h1 className='text-2xl text-white p-2'>Password Generator</h1>
            <div className=" w-[28rem] h-48 bg-blue-200 rounded-xl shadow-xl">
                <div className='mt-8 mb-8'>
                    <input type="text" className='outline-none p-1 rounded-l-md border-y-2 border-l-2 w-64 border-blue-300' value={password} />
                    <button className='bg-blue-600 p-1 px-3 rounded-r-md border-y-2 border-r-2 border-blue-300 ' onClick={()=>{passwordGenerator()}}>Copy</button>
                </div>
                <div className='flex flex-wrap justify-center items-center'>
                    <input type="range" min={8} max={32} value={length} onChange={(event)=>(setLength((currLength)=>(currLength=event.target.value)))} id="length" />
                    <label htmlFor="length" className='px-2 font-bold '>Length ({length})</label>
                    <input type="checkbox" defaultChecked={isNumber} onChange={()=>{setisNumber((prev)=>(prev=(!prev)))}} className='' id='number' />
                    <label htmlFor="number" className='px-2 font-bold'>Number</label>
                    <input type="checkbox" defaultChecked={isCharacter} onChange={()=>{setisCharacter((prev)=>(prev=(!prev)))}}  id='char' />
                    <label htmlFor="char" className='px-2 font-bold'>Character</label>
                </div>
            </div>
        </div>
    )
}

export default Card