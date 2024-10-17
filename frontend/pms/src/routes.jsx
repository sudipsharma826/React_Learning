import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-me'
import Productpage from './pages/product-page'
import AddProduct from './pages/add-product'
import SinglePage from './pages/single-page'
import EditProduct from './pages/edit-product'
const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,


    },
    {
        path : '/about',   
        element: <AboutPage />
    },
    {
        path : '/product',
        element: <Productpage />
    },
    {
        path: 'addproduct',
        element: <AddProduct />
    },{
        path : 'product/:id',
        element: < SinglePage/>
    },
    {
        path : 'editproduct',
        element : < EditProduct />
    }

])
export default routes