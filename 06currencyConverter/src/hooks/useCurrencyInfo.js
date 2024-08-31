import { useEffect, useState} from "react";

// ALL hooks are mostly start with "use" word
function useCurrencyInfo(currency) {
    const [data,setData] = useState({}) 
    useEffect(() => {
        fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data) 
    },[currency])

    return data
 }
export default useCurrencyInfo

 // api calling, 
 /* here we created a custome hook to use, more like a function with a hook
 where we using a state of data and fetching the currency from the api
 and then using dependency of currency so whenever currency change this api should be called
 and then we return the data of it*/