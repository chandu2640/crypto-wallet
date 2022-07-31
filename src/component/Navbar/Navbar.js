import React from 'react';
import './Navbar.css';
import LogoImg from '../../assets/logo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo last">
            <div className="logoImg">
                <img src={LogoImg} alt=""/>
            </div>
            <div className="logoName">
                <div className="mainName">Bitcoin</div>
                <div className="secName">BTC/USDC</div>
            </div>
            <div className="dropDown">
                <KeyboardArrowDownIcon/></div>
        </div>
        <div className="lastPrice">
            <div className="navTitle">Last Price</div>
            <div className="navData navPriceData">23,935.32 USDC</div>
        </div>
        <div className="lastPrice">
            <div className="navTitle">24h Change</div>
            <div className="navData navPriceData">+0.00%</div>
        </div>
        <div className="lastPrice">
            <div className="navTitle">24h Low</div>
            <div className="navData">23,935.32 USDC</div>
        </div>
        <div className="lastPrice">
            <div className="navTitle">24h High</div>
            <div className="navData navValue">23,935.32 USDC</div>
        </div>
        <div className="extraIcons">
            <div className="pro">Pro <span className='probox'></span> </div>
            <div className="navOtherIcons">
                <DonutSmallIcon/>
                <CropFreeIcon/>
                <AutoAwesomeMosaicIcon/>
            </div>
        </div>
    </div>
  )
}

export default Navbar