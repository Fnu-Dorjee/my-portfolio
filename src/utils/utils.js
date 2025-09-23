import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { Mail } from 'lucide-react';
//import { BiLogoGmail } from 'react-icons/bi';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import resume from '../../public/my-Resume.pdf';

export const LINKS = [
    { id:1, link: "home"},
    { id:2, link: "about"},
    { id:3, link: "portfolio"},
    { id:4, link: "experience"},
    { id:5, link: "contact"},
];



export const SOCIAL_LINKS = [
    {
        id: 1,
        icon: FaGithub,
        name: "GitHub",
        link: "https://github.com/Fnu-Dorjee"
    },
    {
        id: 2,
        icon: FaLinkedin,
        name: "Linkedin",
        link: "https://www.linkedin.com/in/fnu-namgyal-dorjee-213b68332/"
    },
    {
        id: 3,
        icon: Mail,
        name: "Gmail",
        link: "mailto:dorjeefnu462@gmail.com"
    },
    {
        id: 4,
        icon: BsFillPersonVcardFill,
        name: "Resume",
        link: resume,
        download: true
    }
]

//PROTFOLIO 

import videoCallApp from "../../public/my-img/videoCall.png";
import chatApp from "../../public/my-img/chat.png";

export const PROTFOLIO_IMG  = [
    {
        id: 1,
        image: videoCallApp,
        demoLink: "https://tokma-video-call-2.onrender.com",
        codeLink: "https://github.com/Fnu-Dorjee/tokma-video-call-"

    },
    {
        id: 2,
        image: chatApp,
        demoLink: "https://fullstack-chat-app-yl3d.onrender.com",
        codeLink: "https://github.com/Fnu-Dorjee/fullstack-chat-app"

    }

]

//CERTIFICATES

export const certificates = [
    { 
        id: 1, 
        name: "Certificate 1", 
        link: "/certificate2.pdf"
     },
    { 
        id: 2, 
        name: "Certificate 2", 
        link: "/certificate3.pdf" 
    },
    { 
        id: 3, 
        name: "Certificate 3", 
        link: "/certificate4.pdf" 
    }
  ];
  

//EXPERIENCE AND TECH LOGOS

export const LOGOS_NAME = [
    {
        id:1,
        title: "HTML5",
        style:"shadow-orange-500",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        id:2,
        title: "CSS",
        style:"shadow-blue-500",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          
    },
    {
        id:3,
        title: "JS[ES6]",
        style:"shadow-yellow-500",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          
    },
    {
        id:4,
        title: "React",
        style:"shadow-blue-600",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          
    },
    {
        id:5,
        title: "Tailwind",
        style:"shadow-sky-400",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
          
    },
    {
        id:6,
        title: "GitHub",
        style:"shadow-gray-100 bg-gray-500",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
          
    },
    {
        id:7,
        title: "Node",
        style:"shadow-green-400",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          
    },
    {
        id:8,
        title: "Express",
        style:"shadow-red-200 bg-gray-400",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" 
          
    },
    {
        id:9,
        title: "mongoDB",
        style:"shadow-green-500",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          
          
    },

    {
        id:10,
        title: "Redux TK",
        style:"shadow-purple-500",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" 
          
          
          
    },
          
    {
        id:11,
        title: "socketio",
        style:"shadow-orange-500 bg-gray-100",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg"
          
          
    },
    
    
]