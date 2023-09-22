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
import Counter from '../Components/State-Props/Counter';
import Todo from "../Components/React-Hooks/customHooks/Todo";
import Button from "../Components/React-Hooks/customHooks/Button";
import Data from '../Components/State-Props/Data';
import HooksMemo from "../Components/React-Hooks/HooksMemo/HooksMemo"
import HooksCallback from "../Components/React-Hooks/HooksCallback/HooksCallback";
import MultipleStateIntoReducer from "../Components/React-Hooks/HooksReducer/MultipleStateIntoReducer";
import Mount from "../Components/LifeCycleMethod/Mount";
import Unmount from "../Components/LifeCycleMethod/Unmount";
import Update from "../Components/LifeCycleMethod/Update";
const AllRouters = () => {

          return (
                    <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/contact" element={<ContactPage apiData={dataJson} />} />
                              <Route path="/about" element={<About apiData={dataJson} />} />
                              <Route path='/hooksEffect' element={<HooksEffect apiData1={dataJson} data={"hi"} />} />
                              <Route path='/hooksReduce' element={<HooksReducer apiData2={dataJson} />} />
                              <Route path='/StateProps' element={<StateProps apiData={dataJson} />} />
                              <Route path='/HooksRef1' element={<HooksRef1 apiData={dataJson} />} />
                              <Route path='/HooksRef' element={<HooksRef apiData={dataJson} />} />
                              <Route path='/HooksRef2' element={<HooksRef2 apiData={dataJson} />} />
                              <Route path='/HooksRef3' element={<HooksRef3 apiData={dataJson} />} />
                              <Route path='/HooksRef4' element={<HooksRef4 apiData={dataJson} />} />
                              {/* Todo: convert into router */}
                              <Route path='/Counter' element={<Counter />} />
                              <Route path='/Todo' element={<Todo />} />
                              <Route path='/Button' element={<Button />} />
                              <Route path='/Data' element={<Data />} />
                              <Route path='/HooksMemo' element={<HooksMemo />} />
                              <Route path='/Callback' element={<HooksCallback />} />
                              <Route path='/MultipleStateIntoReducer' element={<MultipleStateIntoReducer />} />
                              <Route path='/Mount' element={<Mount />} />
                              <Route path='/Unmount' element={<Unmount />} />
                              <Route path='/Update' element={<Update />} />
                              <Route path='*' element={<NotFoundPage />} />
                    </Routes>

          )
}


export default AllRouters