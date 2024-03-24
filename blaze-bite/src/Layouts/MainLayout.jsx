import Nav from "../Components/Nav.jsx";
import Home from "../Pages/Home.jsx";
import Blogs from "../Pages/Blogs.jsx";
import Bookmarks from "../Pages/Bookmarks.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer.jsx";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;