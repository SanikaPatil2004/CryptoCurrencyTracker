import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../../context/CoinContext';
import LineChart from '../../../components/LineChart/LineChart';

const Coin = () => {
  const {coinId} = useParams();
  const [coinData,setCoinData]=useState();
  const [historicalData,setHistoricalData]=useState();
  const {currency}=useContext(CoinContext);
  const fetchCoinDta = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-NhQoRkc3s2i24nPyvpeLmJPs'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }
  const fetchHistoricalData = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-NhQoRkc3s2i24nPyvpeLmJPs'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  }
  useEffect(()=>{
    fetchCoinDta();
    fetchHistoricalData();
  },[currency])
  if(coinData && historicalData){
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt=''/>
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData}/>
        </div>
        <div className="coin-details">
          <div className="coin-overview">
            <h2>Overview</h2>
            <div className="overview-stats">
              <div className="stat-item">
                <span>Market Rank</span>
                <span>#{coinData.market_cap_rank}</span>
              </div>
              <div className="stat-item">
                <span>Current Price</span>
                <span>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span>Market Cap</span>
                <span>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span>24h High</span>
                <span>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span>24h Low</span>
                <span>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span>Total Supply</span>
                <span>{coinData.market_data.total_supply ? coinData.market_data.total_supply.toLocaleString() : 'N/A'}</span>
              </div>
            </div>
            <div className="description">
              <p dangerouslySetInnerHTML={{__html: coinData.description.en.slice(0, 500) + '...'}}></p>
            </div>
          </div>

          <div className="coin-section">
            <h3>Project Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <h4>Whitepaper</h4>
                {coinData.links.whitepaper ? (
                  <a href={coinData.links.whitepaper} target="_blank" rel="noopener noreferrer">View Whitepaper</a>
                ) : (
                  <span>Not Available</span>
                )}
              </div>
              <div className="info-item">
                <h4>Official Website</h4>
                <a href={coinData.links.homepage[0]} target="_blank" rel="noopener noreferrer">{coinData.links.homepage[0]}</a>
              </div>
              <div className="info-item">
                <h4>Genesis Date</h4>
                <span>{coinData.genesis_date || 'Not Available'}</span>
              </div>
              <div className="info-item">
                <h4>Hashing Algorithm</h4>
                <span>{coinData.hashing_algorithm || 'Not Available'}</span>
              </div>
            </div>
          </div>

          <div className="coin-section">
            <h3>Technology & Use Case</h3>
            <div className="tech-info">
              <div className="tech-item">
                <h4>Categories</h4>
                <div className="categories">
                  {coinData.categories.slice(0, 5).map((category, index) => (
                    <span key={index} className="category-tag">{category}</span>
                  ))}
                </div>
              </div>
              <div className="tech-item">
                <h4>Block Time</h4>
                <span>{coinData.block_time_in_minutes ? `${coinData.block_time_in_minutes} minutes` : 'Not Available'}</span>
              </div>
            </div>
          </div>

          <div className="coin-section">
            <h3>Community & Development</h3>
            <div className="community-stats">
              <div className="community-item">
                <span>GitHub Forks</span>
                <span>{coinData.developer_data?.forks || 'N/A'}</span>
              </div>
              <div className="community-item">
                <span>GitHub Stars</span>
                <span>{coinData.developer_data?.stars || 'N/A'}</span>
              </div>
              <div className="community-item">
                <span>Twitter Followers</span>
                <span>{coinData.community_data?.twitter_followers?.toLocaleString() || 'N/A'}</span>
              </div>
              <div className="community-item">
                <span>Reddit Subscribers</span>
                <span>{coinData.community_data?.reddit_subscribers?.toLocaleString() || 'N/A'}</span>
              </div>
            </div>
          </div>

          <div className="coin-section">
            <h3>Links & Resources</h3>
            <div className="links-grid">
              {coinData.links.blockchain_site[0] && (
                <a href={coinData.links.blockchain_site[0]} target="_blank" rel="noopener noreferrer">Blockchain Explorer</a>
              )}
              {coinData.links.official_forum_url[0] && (
                <a href={coinData.links.official_forum_url[0]} target="_blank" rel="noopener noreferrer">Official Forum</a>
              )}
              {coinData.links.subreddit_url && (
                <a href={coinData.links.subreddit_url} target="_blank" rel="noopener noreferrer">Reddit Community</a>
              )}
              {coinData.links.twitter_screen_name && (
                <a href={`https://twitter.com/${coinData.links.twitter_screen_name}`} target="_blank" rel="noopener noreferrer">Twitter</a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    )
  }
 
}

export default Coin
