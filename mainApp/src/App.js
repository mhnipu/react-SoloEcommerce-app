import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
import Products from '../src/pages/Products'
import ProductDetails from '../src/pages/ProductDetails'
import Search from '../src/pages/Search'

// Layout component - Contains Header, Footer, and the outlet for nested routes
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* Outlet to render nested routes */}
      <Footer />
    </div>
  )
}

// Define router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    element: <Layout />, // Render Layout component for all routes
    children: [
      { path: '/', element: <Home /> }, // Home page route
      { path: '/products/:id', element: <Products /> }, // Products page route with dynamic ID
      { path: '/product/:id', element: <ProductDetails /> }, // Product details page route with dynamic ID
      { path: '/search', element: <Search /> }, // Search page route
    ]
  }
])

// App component - Wraps RouterProvider around the router configuration
const App = () => {
  return <div>
    <RouterProvider router={router} /> {/* Provide the defined router */}
  </div>;
};

export default App;
