import React from 'react'
import { useRoutes } from 'react-router-dom';
import About from '../Page/About';
import HomePage from '../Page/HomePage';
import ContactPage from '../Page/ContactPage';
import HooksReducer from '../Components/React-Hooks/HooksReducer/HooksReducer';


const routes = [{ path: '/', element: <HomePage /> },
{ path: '/about', element: <About /> },
{ path: '/contact', element: <ContactPage /> },
{ path: '/hooksReduce', element: <HooksReducer /> },
];

const RoutesUsingHooks = () => {
          const routeResult = useRoutes(routes);
          return (
                    <div>{routeResult}</div>
          )
}

export default RoutesUsingHooks