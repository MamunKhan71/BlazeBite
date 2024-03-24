import {Link, Outlet, useLoaderData} from "react-router-dom";
import placeHolder from '../assets/404.jpg'
import {useState} from "react";
const BlogDetails = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const {title,tags, cover_image, reading_time_minutes,published_at,comments_count,public_reactions_count} = useLoaderData()
    return (
        <div className="max-w-3xl p-10 mx-auto space-y-12 border my-12 rounded-2xl shadow-xl">
            <article className="space-y-8">
                <div>
                    <img className="rounded-2xl h-80 w-full object-cover" src={cover_image || placeHolder} alt=""/>
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-justify">{title}</h1>
                    <div
                        className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <p className="text-sm">{reading_time_minutes} min read</p>
                            <span>•</span>
                            <p className="text-sm">{new Date(published_at).toDateString()}</p>
                        </div>
                        <div className="flex items-center md:space-x-2">
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments</p>
                            <span>•</span>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{public_reactions_count} views</p>
                        </div>
                    </div>
                    <div
                        className="flex items-center gap-4 justify-start">
                        <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                            <Link to=""  onClick={()=> setTabIndex(0)}
                                  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg border-gray-400 ${tabIndex === 0?'border border-b-0':'border-b'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="w-4 h-4">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>Content</span>
                            </Link>
                            <Link to={`author`} onClick={()=> setTabIndex(1)}
                                  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg border-gray-400 ${tabIndex === 1?'border border-b-0':'border-b'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="w-4 h-4">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <span>Author</span>
                            </Link>
                        </div>
                        <div className="btn btn-circle">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                 className="text-secondary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    {
                        tags.map(tag => <a rel="noopener noreferrer" href="#"
                                           className="px-3 py-1 bg-base-200 rounded-lg font-medium text-gray-900">#{tag}</a>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;