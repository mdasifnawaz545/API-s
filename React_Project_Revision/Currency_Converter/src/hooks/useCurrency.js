import axios from 'axios';
import { useEffect,useState} from 'react';
function useCurrency(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
        axios.get(url).then((validJson) => { setData((prevData)=>prevData=validJson.data[currency]) });

    }, [currency]
    )
    return data;


}

export default useCurrency;