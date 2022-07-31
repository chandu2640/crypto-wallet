import React from 'react';
import './Sidepannel.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidepannel = () => {
  return (
    <div className='sidepannel'>
      <div className="btns">
        <div className="buybtn actionBtn">Buy</div>
        <div className="sellbtn actionBtn">Sell</div>
      </div>
      <div className="available">
        <div className="title extraTitle">AVAILABLE BALANCE</div>
        <div className="value">0.0 ETH</div>
        <div className="value">0 USDT</div>
      </div>
      <div className="extraBox">
        <div className="mar">MARKET</div>
        <KeyboardArrowDownIcon/>
      </div>
      
      <div className="extraBox">
        <div className="mar">
          <p>AMOUNT IN USDT</p>
          <p>0</p>
        </div>
        <div className="symbol USDT">USDT</div>
      </div>
      <div className="extraBox">
        <div className="mar">
          <p>AMOUNT IN ETH</p>
          <p>0</p>
        </div>
        <div className="symbol ETH">ETH</div>
      </div>
      <div className="buyEth">
        <button>Buy ETH</button>
      </div>
    </div>
  )
}

export default Sidepannel