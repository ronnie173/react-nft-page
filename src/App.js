import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import {useState, useEffect} from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
function App() {
const [punkListData, setPunkListData] = useState([])
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeadata = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x6C316D633def9419838247de499171BB277284c0&order_direction=asc')
      console.log(openSeadata.data.assets)
      setPunkListData(openSeadata.data.assets)
    }
    return getMyNfts()
  },[])
  return (
    <div className='app'>
      <Header/>
    <PunkList punkListData={punkListData} />
    </div>

  );
}

export default App;
