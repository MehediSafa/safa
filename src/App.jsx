import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from './components/root/Layout';
import Features from './pages/Features';

const App = () => {
let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/ > }>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/features" element={<Features/>}></Route>
  </Route>
))  


  return (
    <>
      <RouterProvider router={router}/>
     
      
    </>
  )
}

export default App
