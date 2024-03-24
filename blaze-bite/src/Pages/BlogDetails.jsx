import {Link, useLoaderData} from "react-router-dom";
import placeHolder from '../assets/404.jpg'
import {useState} from "react";
const BlogDetails = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const {title,cover_image, reading_time_minutes,published_at,comments_count,public_reactions_count} = useLoaderData()
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
                        className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                        <Link  onClick={()=> setTabIndex(0)}
                              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg border-gray-400 ${tabIndex === 0?'border border-b-0':'border-b'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link onClick={()=> setTabIndex(1)}
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
                </div>
                <div className="">
                    <p>{""}</p>
                </div>
            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    <a rel="noopener noreferrer" href="#"
                       className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#MambaUI</a>
                    <a rel="noopener noreferrer" href="#"
                       className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#TailwindCSS</a>
                    <a rel="noopener noreferrer" href="#"
                       className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#Angular</a>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Related posts</h4>
                    <ul className="ml-4 space-y-1 list-disc">
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget
                                pretium lobortis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat,
                                aliquam lectus sit amet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;