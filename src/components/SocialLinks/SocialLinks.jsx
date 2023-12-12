
import {  FaGithub,  FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SocialLinks = () => {
    return (

       
        <div className="space-x-4 lg:gap-10 gap-4 flex lg:flex-col flex-row lg:items-end lg:justify-end items-center justify-center">
            <Link to='in/zinath-farhana-0593552a4'><p className="cursor-pointer text-white text-3xl"><FaLinkedin /></p></Link>
            <Link to='https://github.com/Zinath22'><p className="cursor-pointer text-white text-3xl"><FaGithub /></p></Link>
            
          

        </div>
    );
};

export default SocialLinks;