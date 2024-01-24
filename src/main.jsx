import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import NewProduct from './pages/NewProduct.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import MyCart from './pages/MyCart.jsx';

import ProtectedRoute from './pages/ProtectedRoute.jsx';
import Captain from './pages/Captain.jsx';
import Ironman from './pages/IronMan.jsx';
import SpiderMan from './pages/SpiderMan.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/ironman', element: <Ironman /> },
      { path: '/spiderman', element: <SpiderMan /> },
      { path: '/captain', element: <Captain /> },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: './products/id', element: <ProductDetail /> },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
