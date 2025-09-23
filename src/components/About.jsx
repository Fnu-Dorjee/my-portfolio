
import Wrapper from "./Wrapper.jsx";
import Certificates from "./Certificate.jsx";


const About = ()=>{
    return(
        <Wrapper 
            name="about" 
            title="About" 
            className="from-gray-800 to-black">

            <p className="text-xl max-sm:text-md">
                Hi, I'm Dorjee — a Full-Stack MERN Developer and 2nd-year Computer Science student at LaGuardia Community College.
                I've completed 117+ hours of Udemy training and built 10+ projects, including real-time chat and video-call apps with Socket.IO.

            </p>
            <p className="text-xl max-sm:text-md">
                <br/>
                Open to internships, collaborations, and junior developer roles to grow and contribute.
              
            </p>
            <Certificates/>

        </Wrapper>
      
    )
};

export default About;
