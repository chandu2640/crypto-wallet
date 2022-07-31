import React from 'react';
import './Sidebar.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GridViewIcon from '@mui/icons-material/GridView';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SettingsIcon from '@mui/icons-material/Settings';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="upperSymbols">
            <MenuOpenIcon/>
            <GridViewIcon/>
            <InsertChartOutlinedRoundedIcon/>
            <AccountBalanceWalletOutlinedIcon/>
            <TimelineIcon/>
            <WorkspacePremiumIcon/>
            <CardGiftcardIcon/>
            <SettingsIcon/>
        </div>
        <div className="lowerSymbold">
            <WbSunnyIcon />
            <div className="light"></div>
        </div>
    </div>
  )
}

export default Sidebar