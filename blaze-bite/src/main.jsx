import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Bookmarks from "./Pages/Bookmarks.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import BlogDetails from "./Pages/BlogDetails.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/blogs',
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
                element: <Blogs></Blogs>
            },
            {
              path: '/blogs/:blogId',
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.blogId}`),
              element: <BlogDetails></BlogDetails>
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            }
        ]
    },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
