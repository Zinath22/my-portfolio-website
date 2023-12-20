
import { HashLink } from "react-router-hash-link";


const Navbar = () => {

    const navLinks = 
               <>

            <li>
                <HashLink smooth to="#home">
                    Home
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#about">
                    About
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#projects">
                    Projects
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#contact">
                    Contact 
                </HashLink>
            </li>
    </>


    return (
        <div>
            <div className="navbar fixed z-10 py-3  text-white text-xl shadow-purple-600 bg-gradient-to-r from-pink-500 to-purple-500 shadow">
            <div className="navbar-start">
                <div className="dropdown text-purple-600">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <HashLink smooth  to='#top' className="">Zinath Farhana</HashLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu text-xl menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>

        </div>
        </div>
    );
};

export default Navbar;