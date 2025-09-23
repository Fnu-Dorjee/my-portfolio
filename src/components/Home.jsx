

import myImg from "../assets/mypics.png";
import {MoveRight} from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full 
        px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>

                <p className="text-gray-400 py-4 max-w-md">
                     React.js Web Developer since 2023 | Built 10+ websites & real-time chat apps | 117+ hrs Udemy training |
                      CS student at LaGuardia CC <span>(LaGCC)</span>. 
                </p>
                <div className="py-4 max-sm:z-10">
                    <Link to="portfolio" smooth duration={500}>
                 
                    <button className="btn btn-primary group">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300"><MoveRight className="size-4 ml-1"/></span>
                    </button>
                    </Link>
                </div>
            </div>
            <div className="max-[480px]:mt-[-100px] shadow-md shadow-gray-400  rounded-lg max-sm:mt-[-150px] max-sm:mb-10">
                <img 
                src={myImg} alt="my-profile" 
                className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  );
}

export default Home;
