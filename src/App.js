import React from 'react'
import './App.css'
import Chart from './component/Chart/Chart'
import Navbar from './component/Navbar/Navbar'
import Sidebar from './component/Sidebar/Sidebar'
import OrderBook from './component/OrderBook/OrderBook' ;
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Redux/data/action";
import Sidepannel from './component/Sidepannel/Sidepannel'
import Bottomtab from './component/Bottomtab/Bottomtab'

const App = () => {
  const dispatch=useDispatch;
  // const dataVis=useSelector((state)=>fetchData);
  // const dispatch = useDispatch();
  // const dataVis = useSelector((state) => state.fetchData);

  
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Chart/>
      {/* <Bottomtab/> */}
      <OrderBook/>
      <Sidepannel/>
    </div>
  )
}

export default App