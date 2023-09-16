import React from 'react'
import HomePage from '../Page/HomePage'
import { Route, Routes } from 'react-router-dom';
import ContactPage from '../Page/ContactPage';
import About from '../Page/About';
import { NotFoundPage } from '../Page/NotFoundPage';

const AllRouters = () => {
          return (
                    <Routes>
                              <Route path="/" element={<HomePage />} /> 
                              <Route path="/contact" element={<ContactPage />} /> 
                              <Route path="/about" element={<About />} />
                              <Route path='*' element={ <NotFoundPage/>} />
                    </Routes>

          )
}


export default AllRouters