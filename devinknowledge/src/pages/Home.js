import {useState} from 'react'

import MainContent from '../components/maincontent/MainContent';
import SideBar from '../components/sidebar/SideBar';
import './index.css'

export default function Home() {
  
  const [tipList, setTipList] = useState([])
  console.log(tipList)
  return (
    <div>
      <div id="main">
        <SideBar tipList={tipList} setTipList={setTipList}/>
        <MainContent tipList={tipList}/>
      </div>



      <div id="footer">
        <button onclick="lightMode()">Light mode</button>
        <button onclick="darkMode()">Dark mode</button>
      </div>
    </div>
  );
}
