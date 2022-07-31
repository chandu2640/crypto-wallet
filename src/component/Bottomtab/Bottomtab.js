import React from 'react'
import './Bottomtab.css'

const Bottomtab = () => {
  return (
    <div className='bottomtab'>
        <div className="menu">
            <div className="sub">All Orders</div>
            <div className="sub">Pending Orders</div>
            <div className="sub">Traders</div>
        </div>
        <div className="menu">
            <div className="sub">MARKET</div>
            <div className="sub">TIME</div>
            <div className="sub">PRICE</div>
            <div className="sub">AMOUNT</div>
            <div className="sub">SIDE</div>
            <div className="sub">STATUS</div>
        </div>
    </div>
  )
}

export default Bottomtab