import axios from 'axios';
import { useEffect, useState } from 'react';

async function useCurrency(currency){
    const [data,setData]= useState({})
    useEffect(async()=>{let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
    let validJson= await axios.get(url);
    setData((currData)=>(currData=validJson.data[`${currency}`]))
1},[currency])
}

export default useCurrency;