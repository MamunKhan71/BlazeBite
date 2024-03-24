import placeHolderImage from '../assets/404.jpg'
import {Link} from "react-router-dom";
const Blog = ({blog}) => {
    return (
        <div className="p-6 rounded-2xl flex justify-between items-end shadow-xl">
            <div
                className="max-w-sm mx-auto group h-full flex flex-col justify-between">
                <img role="presentation" className="object-cover w-full rounded-2xl h-44 shadow-md"
                     src={blog.cover_image || placeHolderImage} alt=""/>
                <div className="py-6 space-y-2">
                    <h3 className="text-2xl font-semibold">{blog.title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(blog.published_at).toDateString()}</span>
                    <p>{blog.description}</p>
                </div>
                <div>
                    <Link to={`/blogs/${blog.id}`}
                       className="relative inline-flex rounded-xl items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary hover:bg-secondary group w-full">
                        <span
                            className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span
                            className="relative w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white text-center">Read More</span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Blog;