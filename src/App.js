import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
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
    children: [{
      path: '/', element: <Home />
    }]
  }
])
const App = () => {
  return <div>App</div>;
};

export default App;
