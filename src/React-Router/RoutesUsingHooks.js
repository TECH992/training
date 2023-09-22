import React from 'react'
import { useRoutes } from 'react-router-dom';
import About from '../Page/About';
import HomePage from '../Page/HomePage';
import ContactPage from '../Page/ContactPage';


const routes = [{ path: '/', element: <HomePage /> },
{ path: '/about', element: <About /> },
{ path: '/contact', element: <ContactPage /> },
];

 const RoutesUsingHooks = () => {
          const routeResult = useRoutes(routes);
          return (
                    <div>{routeResult }</div>
          )
}

export default RoutesUsingHooks