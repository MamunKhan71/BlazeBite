import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";
import Home from "../Pages/Home.jsx";
import Blogs from "../Pages/Blogs.jsx";
import BlogDetails from "../Pages/BlogDetails.jsx";
import Bookmarks from "../Pages/Bookmarks.jsx";
import React from "react";
import Content from "../Components/Content.jsx";
import Author from "../Components/Author.jsx";

export const router = createBrowserRouter([
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
                element: <BlogDetails></BlogDetails>,
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                    },
                    {
                        path: 'author',
                        element: <Author></Author>
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            }
        ]
    },
]);