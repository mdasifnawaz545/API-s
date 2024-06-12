import React, { useId } from 'react'

function Card({
    cardType,
    currencyList,
    amount,
    onAmountChange,
    amountDisable=false,
    currencyDisable=false,
    onCurrencyChange,
    selectedCurrency="pkr"
}) {

    let lableId=useId();

    return (
        <div className=' w-96 h-24  bg-white rounded-lg flex justify-around items-center '>
            <div className='flex  flex-col gap-3'>
                <label htmlFor={currencyList}>{cardType}</label>
                <input type="number" value={amount} disabled={amountDisable} id={currencyList} className='outline-none h-8 px-2 border w-32 rounded-lg' onChange={(event)=> {onAmountChange && onAmountChange(event.target.value)}}/>
            </div>

            <div className='flex flex-col gap-3 justify-end items-end'>
                <label htmlFor="selectField">Currency type</label>
                <select type="number" id='selectField' className='w-16 outline-none bg-gray-100 h-7 border-2 border-blue-200 rounded-lg' disabled={currencyDisable} value={selectedCurrency} onChange={(event)=>{onCurrencyChange && onCurrencyChange(event.target.value)}} >
                    {
                        currencyList.map((el) => (
                            <option key={el} value={el}>{el}</option>
                        ))
                    }

                </select>
            </div>


        </div>
    )
}

export default Card