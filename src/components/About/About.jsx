import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

import { SiCss3, SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiMui, SiNetlify, SiTailwindcss, SiVercel } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




const About = () => {

    return (
        <div id="about" className="flex my-[120px] flex-col lg:flex-row justify-between items-center gap-4 w-[80%] mx-auto ">
            <div>
                <img className="rounded-full shadow-xl shadow-purple-600" src="https://avatars.githubusercontent.com/u/138351340?v=4" alt="" />
            </div>
            <div className='max-w-3xl'>
                <p>Hello there!  I am Zinath Farhana, a passionate Frontend MERN Stack Developer . I thrive on turning creative ideas into engaging and user-friendly digital experiences. With a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I specialize in building robust and scalable frontend applications that leave a lasting impact.</p>

                <div className='mt-5'>
                    <Tabs>
                        <TabList>
                            <Tab>Skills</Tab>
                            <Tab>Education</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">

                                <div className=" ">
                                    <h3 className=" text-3xl my-5 lg:my-10 text-center font-semibold">Front-End</h3>
                                    <div className="">
                                        <div className="grid grid-cols-4 text-5xl gap-5 text-purple-600 mb-10">
                                            <div className="flex-col flex justify-center items-center">
                                                <FaHtml5 />
                                                <h5 className="text-center text-xs mt-1">HTML</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiCss3 />
                                                <h5 className="text-center text-xs mt-1">CSS</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiTailwindcss />
                                                <h5 className="text-center text-xs mt-1">TailwindCss</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <TbBrandJavascript />
                                                <h5 className="text-center text-xs mt-1">JavaScript</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <FaReact />
                                                <h5 className="text-center text-xs mt-1">React</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiMui />
                                                <h5 className="text-center text-xs mt-1">MUI</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <TbBrandFramerMotion />
                                                <h5 className="text-center text-xs mt-1">FramerMotion</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiDaisyui />
                                                <h5 className="text-center text-xs mt-1">DaisyUi</h5>
                                            </div>




                                        </div>
                                    </div>

                                </div>
                               

                                <div className="border-l-2 pl-10 ">
                                    <h3 className=" text-3xl my-5 lg:my-10 text-center font-semibold">Back-End</h3>
                                    <div className="">
                                        <div className="grid grid-cols-4 text-5xl gap-5 text-purple-500 mb-10">
                                            <div className="flex-col flex justify-center items-center ">
                                                <FaNodeJs />
                                                <h5 className="text-center text-xs mt-1">NodeJs</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiExpress />
                                                <h5 className="text-center text-xs mt-1">ExpressJs</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiMongodb />
                                                <h5 className="text-center text-xs mt-1">Mongodb</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiFirebase />
                                                <h5 className="text-center text-xs mt-1">Firebase</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiNetlify />
                                                <h5 className="text-center text-xs mt-1">Netlify</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <SiVercel />
                                                <h5 className="text-center text-xs mt-1">Vercel</h5>
                                            </div>
                                            <div className="flex-col flex justify-center items-center">
                                                <FaGithub />
                                                <h5 className="text-center text-xs mt-1">Github</h5>
                                            </div>





                                        </div>
                                    </div>

                                </div>

                            </div>
                        </TabPanel>

                        {/* education  */}
                        <TabPanel>
                            <div>
                                <div className="text-purple-600 ">
                                    <h3 className="">B.Sc in Engg</h3>
                                    <h3>Information & Communication Engineering (ICE)</h3>
                                    <h3>Bangladesh Army University of Engineering and Technology(BAUET)</h3>
                                    <h3>3.35 out of 4.0</h3>
                                    <h3>Passing Year: 2022</h3>
                                </div>
                                <p className="divider"></p>
                                <div className="text-purple-600">
                                    <h3 className="">HSC</h3>
                                    <h3>Science</h3>
                                    <h3>Rajshahi Govt. Women's College</h3>
                                    <h3>3.83 out of 5.00</h3>
                                    <h3>Passing Year: 2018</h3>
                                </div>
                                <p className="divider"></p>
                                <div className="text-purple-600">
                                    <h3 className="">SSC</h3>
                                    <h3>Science</h3>
                                    <h3>Rajshahi Govt. Girl's High School(Helenabad)</h3>
                                    <h3>5.00 out of 5.00</h3>
                                    <h3>Passing Year: 2016</h3>
                                </div>
                                <p className="divider"></p>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default About;