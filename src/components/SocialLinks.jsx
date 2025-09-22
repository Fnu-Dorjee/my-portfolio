
import { SOCIAL_LINKS } from "../utils/utils.js";

const SocialLinks = ()=>{
    return (
        <div className="flex flex-col top-[35%] left-0 fixed max-lg:hidden">
            <ul>
                {
                    SOCIAL_LINKS.map(({id,link,name,icon:Icon, download})=>(

                        <li key={id}
                            className='flex justify-center items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 
                                        hover:ml-[-10px] hover:rounded-md duration-300 '>
                            <a 
                                href={link}
                                download={download}
                                target={download ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className='flex justify-between items-center w-full text-white'
                            > 
                            {name}<Icon className="size-8"/>
                            </a>
                        </li>
                    ))
                }
               
            </ul>
        </div>
    )
};

export default SocialLinks;