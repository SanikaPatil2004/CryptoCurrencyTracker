import { createContext, useEffect, useState, useCallback } from "react";

export const CoinContext = createContext();

const CoinContextProvider=(props)=>{
    const [allCoin,setAllCoin]=useState([]);
    const [currency,setCurrency]=useState({
        name:"usd",
        symbol:"$"
    })
    
    const fetchAllCoin = useCallback(async ()=>{
        try {
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-NhQoRkc3s2i24nPyvpeLmJPs'}
            };
            
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data = await response.json();
            setAllCoin(data);
        } catch (err) {
            console.error(err);
        }
    }, [currency.name]);
    
    useEffect(()=>{
        fetchAllCoin();
        const interval = setInterval(fetchAllCoin, 10000);
        return () => clearInterval(interval);
    },[fetchAllCoin])

    const contextValue={
      allCoin, currency, setCurrency
    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;