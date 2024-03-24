import Hero from "../Components/Hero.jsx";

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-116px)] flex justify-center items-center">
           <Hero></Hero>
            <img className="absolute bottom-0 w-full" src="/assets/wave.svg" alt=""/>
        </div>
    );
};

export default Home;