
import { PROTFOLIO_IMG } from '../utils/utils.js';

import Wrapper from './Wrapper.jsx';

const Portfolio = ()=>{
    return(

        <Wrapper 
            name="portfolio" 
            title="Portfolio" 
            description='Check out some of my work right here...'
            className="from-black to-gray-800"
            >


                <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-8 px-12 sm:px-0'>
                        {
                            PROTFOLIO_IMG.map(({id,image,demoLink,codeLink})=>{
                                                return(
                                                    <div className='shadow-md shadow-gray-600  rounded-lg' key={id}>
                                                        <img 
                                                            src={image} 
                                                            alt="asss" 
                                                            className="rounded-md duration-200 hover:scale-105"/>
                                                        <div className='flex items-center justify-center gap-10 mt-4 mb-4'>
                                                                <a 
                                                                        href={demoLink} 
                                                                        target="_blank"
                                                                        rel="noopener noreferrer">
                                                                    <button className='btn btn-primary'>Demo</button>
                                                                </a>

                                                                <a 
                                                                        href={codeLink} 
                                                                        target="_blank"
                                                                        rel="noopener noreferrer">
                                                                    <button className='btn btn-primary'>Code</button>
                                                                </a>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                    
                                                )
                                            })
                                        }
                                        
                                    
                    </div>

        </Wrapper>
        
    )
}


export default Portfolio;