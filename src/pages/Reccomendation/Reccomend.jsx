import React from 'react'
import '/src/pages/Reccomendation/Reccomend.css'
import { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'


const Reccomend = () => {
    const {allCoin,currency}=useContext(CoinContext);
    const [displayCoin,setDisplayCoin]=useState([]);
    const [input,setInput]=useState('');

    const inputHandler=(event)=>{
       setInput(event.target.value);
       if(event.target.value===""){
        setDisplayCoin(allCoin);
       }
    }
    const searcHandler=async (event)=>{
        event.preventDefault();
        const coins = await allCoin.filter((item)=>{
           return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])
  
  return (
    <div className='home'>
        <div className="hero">

            <h2>You can invest in following coin which will gain you maximum profit</h2>
        </div>
        <div className="crypto-tb">
            <div className="tb-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24Hr Change</p>
            </div>
            {
                displayCoin.slice(0,100).map((item,index)=>(
                  <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                     <p className={item.price_change_percentage_24h>0?"s":"none"}>{item.market_cap_rank}</p>
                     <div>
                      <img className={item.price_change_percentage_24h>0?"s":"none"} src={item.image} alt=''/>
                      <p className={item.price_change_percentage_24h>0?"s":"none"}>{item.name + " - "+ item.symbol}</p>
                     </div>
                     <p className={item.price_change_percentage_24h>0?"s":"none"}>{currency.symbol}{item.current_price.toLocaleString()} </p>
                     <p className={item.price_change_percentage_24h>0?"green":"none"}>
                      {Math.floor(item.price_change_percentage_24h*100)/100}</p>
                  </Link>
                
                ))
            
            }
        </div>
        </div>
  )
}



export default Reccomend
