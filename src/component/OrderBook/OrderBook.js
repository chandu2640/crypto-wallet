import * as React from "react";
import './OrderBook.css'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const item=[{
  
}]

const OrderBook = () => {
  return (
    <div className="orderbook">
      <div className="orderOption">
        <div className="option1 main">ORDER BOOK</div>
        <div className="option2">TRADES</div>
      </div>
      <div className="orderAmount">
        <div className="option1">AMOUNT</div>
        <div className="option2">PRICE(USDC)</div>
      </div>
      <div className="actualPrice">
        {item.map((item) => (
            <p className="orderAmount abc"><div className="option1 ">0.001</div>
            <div className="option2"></div>24,09</p>
          ))}
        {/* <div className="option1">AMOUNT</div>
        <div className="option2">PRICE(USDC)</div> */}
      </div>
      <div className="mainPrice">23,935.32 USDC</div>
      <div className="mainPriceData"></div>
    </div>
  );
};

export default OrderBook;
