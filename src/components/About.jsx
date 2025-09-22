
import Wrapper from "./Wrapper.jsx";


const About = ()=>{
    return(
        <Wrapper 
            name="about" 
            title="About" 
            className="from-gray-800 to-black">

            <p className="text-xl">
                Hi, I'm Dorjee — a passionate Full-Stack Web Developer and a 2nd-year Computer Science student at LaGuardia Community College <span>(Lagcc)</span>.  
                 I discovered my love for coding through Udemy, where I completed 117+ hours of web development courses, learning how to turn ideas into functional, beautiful web applications.
            </p>
            <p className="text-xl">
                <br/>
                I specialize in React.js, Node.js, Express.js, TailwindCSS, and building full-stack applications.
                Some of my favorite projects include a real-time chat application and a real-time video-calling platform built with Socket.IO, both of which strengthened my skills in creating interactive, real-world apps.
              
            </p>
            <br />
            <p className="text-xl">
                I'm eager to gain real-world, market experience and apply what I've learned in professional settings.
                I'm open to internships, collaboration opportunities, or junior developer roles where I can contribute, grow, and learn from experienced teams.
                               
            </p>

        </Wrapper>
      
    )
};

export default About;
