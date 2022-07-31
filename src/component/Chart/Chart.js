import React from 'react'
import './Chart.css';
import TradingViewWidget, { Themes } from "react-tradingview-widget";


const Chart = () => {
  return (
    <div className="chart">
        <TradingViewWidget
      symbol={"BTC"}
      theme={Themes.DARK}
      
    locale="fr"
      width="650px"
      height="522px"
    />

    </div>
  )
}

export default Chart