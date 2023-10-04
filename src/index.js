import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from './ApiFetching/Home';
import Contact from './ApiFetching/Contact';
import About from './ApiFetching/About';
import ApiData from './ApiFetching/ApiData';
import fetchData from './Service/fetchData';
// Todo HashRouter,MemoryRouter 

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
const fetchDataFromAPI = async () => {
  try {
    const data = await fetchData("https://dummyjson.com/products?limit=100");
    return data; // Return the data fetched from the API
  } catch (error) {
    return null; // Return null or an appropriate value in case of an error
  }
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact'
        loader={fetchDataFromAPI}
        // action={async () => {
        // const apiData = await fetchDataFromAPI();
        // return { apiData };
        // }}
        element={<Contact />} />

      <Route
        loader={fetchDataFromAPI}
        path='ApiData'
        element={<ApiData />}
      />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}

  </React.StrictMode>
);



