import {useEffect, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import Blog from "./Blog.jsx";
const Blogs = () => {
    const data = useLoaderData();
    const [getPost, setPost] = useState(10)
    const handlePost = () => {
        setPost(data.length)
    }
    return (
        <section className="mt-4">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="p-6 rounded-2xl flex justify-between items-end shadow-xl">
                    <div
                        className="h-full flex justify-between">
                        <div className="basis-7/12">
                            <img className="rounded-2xl shadow-lg" src={data[0].cover_image} alt=""/>
                        </div>
                        <div className="p-6 space-y-2 lg:col-span-5 flex-1">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{data[0].title}</h3>
                            <span
                                className="text-xs dark:text-gray-600">{new Date(data[0].published_timestamp).toLocaleDateString()}</span>
                            <p>{data[0].description}</p>
                            <Link to={`/blogs/${data[0].id}`}
                                  className="relative inline-flex rounded-xl items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary hover:bg-secondary group w-full">
                                <span
                                    className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span
                                    className="relative w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white text-center">Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        data.slice(0, getPost).map(blog => <Blog blog={blog}></Blog>)
                    }
                </div>
                <div className="flex justify-center">
                    <button type="button" onClick={handlePost}
                            className="px-6 py-3 text-sm rounded-md hover:underline  dark:text-gray-600">Load
                        more posts...
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blogs;