import React from 'react'
import HomePage from '../Page/HomePage'
import { Route, Routes } from 'react-router-dom';
import ContactPage from '../Page/ContactPage';
import About from '../Page/About';
import { NotFoundPage } from '../Page/NotFoundPage';
import { HooksEffect } from "../Components/React-Hooks/HooksEffect";
import HooksReducer from "../Components/React-Hooks/HooksReducer/HooksReducer"
import StateProps from "../Components/Parent/StateProps"
import HooksRef1 from "../Components/React-Hooks/HooksRef/HooksRef1"
import HooksRef from "../Components/React-Hooks/HooksRef/HooksRef"
import HooksRef2 from "../Components/React-Hooks/HooksRef/HooksRef2"
import HooksRef3 from "../Components/React-Hooks/HooksRef/HooksRef3"
import HooksRef4 from "../Components/React-Hooks/HooksRef/HooksRef4"
import dataJson from "../data.json"
const AllRouters = () => {
        
          return (
                    <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/contact" element={<ContactPage apiData={dataJson} />} />
                              <Route path="/about" element={<About  apiData={dataJson}/>} />
                              <Route path='/hooksEffect' element={<HooksEffect apiData1={dataJson} data={ "hi"} />} />
                              <Route path='/hooksReduce' element={<HooksReducer apiData2={dataJson}/>} />
                              <Route path='/StateProps' element={<StateProps apiData={dataJson}/>} />
                              <Route path='/HooksRef1' element={<HooksRef1 apiData={dataJson}/>} />
                              <Route path='/HooksRef' element={<HooksRef apiData={dataJson}/>} />
                              <Route path='/HooksRef2' element={<HooksRef2 apiData={dataJson}/>} />
                              <Route path='/HooksRef3' element={<HooksRef3 apiData={dataJson}/>} />
                              <Route path='/HooksRef4' element={<HooksRef4 apiData={dataJson}/>} />


                              <Route path='*' element={<NotFoundPage />} />
                    </Routes>

          )
}


export default AllRouters