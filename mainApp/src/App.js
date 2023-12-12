import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
import Products from '../src/pages/Products'
import ProductDetails from '../src/pages/ProductDetails'
import Search from '../src/pages/Search'
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/search', element: <Search /> },
    ]
  }
])
const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;
