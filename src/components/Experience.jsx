
import Wrapper from "./Wrapper.jsx";
import { LOGOS_NAME } from "../utils/utils.js";

const Experience = ()=>{
    return(
        <Wrapper 
            name="experience"
            title="Experience"
            description="These are the technologies I have worked with.."
            className="from-gray-800 to-black"
        >
            {/* Container switches between scroll (small screens) and grid (sm+) */}
            <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 py-8 px-4 sm:px-0 overflow-x-auto sm:overflow-visible">
                {LOGOS_NAME.map(({ id, title, src, style }) => (
                <div
                    key={id}
                    className={`flex-shrink-0 sm:flex-shrink bg-gray-800 shadow-md hover:scale-105 duration-200 py-4 px-2 rounded-lg flex flex-col items-center ${style}`}
                >
                    <img src={src} alt={title} className="w-20 h-20 object-contain" />
                    <p className="mt-4">{title}</p>
                </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default Experience;