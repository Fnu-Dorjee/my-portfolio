
import {Menu, X } from "lucide-react";
import { LINKS } from "../utils/utils.js";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = ()=>{
   const [isClickMenu, setIsClickMenu] = useState(false);

    return(
        <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed z-50">
            <div className="text-center ">
                <h1 className="text-3xl font-signature ml-2 md:text-4xl">
                    Tokma
                <span className="block text-sm font-light mt-0 border-1 border-yellow-300 py-0.5">ཐོག་མ</span>
                </h1>
            </div>
            <ul className="hidden md:flex">
                {
                    LINKS.map(({id,link})=>(
                            <li 
                                key={id} 
                                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-100"
                                >
                                <Link
                                    to={link}
                                    smooth
                                    duration={500}
                                   >
                                    {link}</Link>
                            </li>)
                    )
                }
                
            </ul>

            <div 
                className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden"
                onClick={()=>setIsClickMenu(!isClickMenu)}
                >
                {
                    !isClickMenu ? ( <Menu className="size-8"/>):( <X className="size-8"/>)
                }
            </div>
            {
                isClickMenu &&(
                    <ul 
                        className="flex flex-col justify-center items-center absolute w-full top-0 left-0 h-screen 
                                    bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden
                                    
                        ">
                         {
                            LINKS.map(({id,link})=>(
                                <li key={id} className="cursor-pointer capitalize py-6 text-4xl px-4 hover:scale-105 duration-100 ">
                                    <Link 
                                        onClick={()=>setIsClickMenu(!isClickMenu)}
                                        to={link}
                                        smooth
                                        duration={500}
                                        >
                                    {link}
                                    </Link>
                                    
                                </li>
                            ))
                         }
                    </ul>
                )
            }
            
   
        </div>
    )
}

export default NavBar;
