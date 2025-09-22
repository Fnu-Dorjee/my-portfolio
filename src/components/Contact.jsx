

import Wrapper from "./Wrapper.jsx";

const Contact = ()=>{
    return(

        <Wrapper 
            name="contact"
            title="Contact"
            description="Submit the below form to get in touch with me."
            className="from-black to-gray-800 "
         >
              <div className="flex justify-center items-center ">
                    <form 
                        action="https://getform.io/f/amdygqlb"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                        >
                        

                        <input 
                            type="text" 
                            placeholder="Enter name" 
                            name="name"
                            required
                            className="input input-primary bg-transparent w-full" />     

                        <input 
                            type="text" 
                            name="email"
                            required
                            placeholder="example@gmail.com"
                            className="input input-primary bg-transparent w-full my-4"
                         />

                         <textarea 
                            name="message" 
                            rows="10"
                            required
                            className="textarea textarea-primary bg-transparent w-full"
                            >

                            </textarea>
                        <button 
                            type="submit"
                            className="btn btn-primary my-4">
                                Let's talk
                            </button>
                    </form>
                </div>
        </Wrapper>
       
    )
}

export default Contact;