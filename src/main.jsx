import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.module.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import AllProducts from './pages/AllProducts.jsx';
import NewProduct from './pages/NewProduct.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import MyCart from './pages/MyCart.jsx';
import Fashion from './pages/Fashion.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/fashion', element: <Fashion /> },
      { path: '/accessory', element: <AllProducts /> },
      { path: '/digital', element: <AllProducts /> },
      { path: '/product', element: <AllProducts /> },
      { path: '/products/new', element: <NewProduct /> },
      { path: './products/id', element: <ProductDetail /> },
      { path: '/carts', element: <MyCart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
