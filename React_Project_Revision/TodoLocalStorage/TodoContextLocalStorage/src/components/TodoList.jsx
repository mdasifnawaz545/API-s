import React from 'react'

function TodoList() {
    return (
        <div className="bg-blue-200  w-96 lg:w-1/2 h-12 flex justify-between items-center rounded-xl">
            <div>          <button><img src="https://img.icons8.com/?size=100&id=Zy5ghkQj2rKy&format=png&color=000000" width={24} alt="" /></button>
            </div>
            <div className='flex justify-evenly items-center gap-4'>


                <button><img src="https://img.icons8.com/?size=100&id=IQwdXd0kulpV&format=png&color=000000" width={24} alt="" /></button>
                <button><img src="https://img.icons8.com/?size=100&id=Gr9Hk0UxLDFn&format=png&color=000000" width={24} alt="" /></button></div>

            {/* 
            <button><img src="https://img.icons8.com/?size=100&id=DVzc1vi8FDJt&format=png&color=000000" width={24} alt="" /></button> */}



        </div>
    )
}

export default TodoList