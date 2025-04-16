import { useState } from 'react'
import  UseEffect1 from './UseEffect1'
import {Routes,Route,Link} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import CallbackTest from './CallbackTest';
import PromiseTest from './PromiseTest';
import AsyncAwait from './AsyncAwait';
import AxiosTest from './AxiosTest';

function App() {


  return (
    <>
    {/* <UseEffect1 />
    <nav>  //실제 경로 이동 Next의 Link to 와 같음
      <Link to="/home">홈</Link> <br />
      <Link to="/About">소개</Link>
    </nav>
    <Routes>  //화면에 문구 띄우기
        <Route path='/home' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes> */}
      {/* <CallbackTest /> */}
      {/* <PromiseTest /> */}
      {/* <AsyncAwait /> */}
      <AxiosTest />
    </> 
  )
}

export default App
