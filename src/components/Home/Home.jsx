import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Link } from "react-router-dom";
import { HiDocumentDownload } from "react-icons/hi";


const Home = () => {
    const [text] = useTypewriter({
        words: ['React Developer', 'Frontend Developer', 'Mern Stack Developer', 'Full Stack Developer', 'Backend Developer'], // Fixed typo in the word "Developereloper"
        loop: {}, // Set loop to true for continuous typing
        typeSpeed: 120,
        deleteSpeed: 80,
        cursor: Cursor.BLOCK,
        // cursorStyle: '|', // Changed cursorStyle to match the correct property name
        // cursorWidth: 0.1,
        cursorColor: "#000000"
    });

    return (
        <div className='h-screen' id='home'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="w-full flex flex-col lg:flex-row justify-between lg:px-20 px-4 items-center text-neutral-content">
                   <div>
                   <div className="max-w-5xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hi! I am
                            <span className="text-purple-600"> Zinath Farhana</span>
                        </h1>
                        <h2 className="mb-10 text-4xl text-white font-semibold ">{text} <Cursor cursorStyle='|' /></h2> {/* Ensure the Cursor component is used correctly */}
                      <div className="flex gap-4">
                      <Link><button className="btn text-center w-40 rounded-sm bg-purple-600 text-white">Contact Me</button></Link>
                      
                     <div className="flex justify-center items-center text-purple-600">
                     
                     <Link>
                     
                     <button  className="btn text-center w-40 rounded-sm bg-purple-600 text-white">Download Resume</button>
                    
                     </Link>
                     <HiDocumentDownload></HiDocumentDownload>
                     </div>
                      
                      </div>
                    </div>
                   </div>

                   <div>
                    <SocialLinks></SocialLinks>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;