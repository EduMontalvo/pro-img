import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './layout/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <Home/>
    </Layout>,
  },
  {
    path: "/About",
    element: <Layout>
      <About/>
    </Layout>,
  },
  {
    path:"/Contact",
    element: <Layout>
      <Contact/>
    </Layout>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
