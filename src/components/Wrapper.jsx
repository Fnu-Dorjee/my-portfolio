

const Wrapper = ({title,description, name,children,className})=>{
    
    return(
        <div 
            name={name}
            className={`w-full h-screen bg-gradient-to-b ${className} text-white p-4`}>
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>{title}</p>
                    { description && <p className='py-6'>{description}</p>}
                </div>
                {children}
            </div>

        </div>
    )
};

export default Wrapper;