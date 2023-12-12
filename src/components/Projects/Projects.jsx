import { Link } from "react-router-dom";
import img1 from "../../assets/Capture1.png"
import img2 from "../../assets/Capture2.png"
import img3 from "../../assets/Capture3.png"

const Projects = () => {
    return (
       <div>
         <div className="">
            <h1 className="text-center  font-semibold text-3xl border-b-2 p-2 border-purple-600 text-purple-600 mx-auto w-[200px]">Projects</h1>
        </div>
         <div id="projects" className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-[90%] mx-auto my-7">
         
         <div className="card  card-compact  bg-base-100 shadow-purple-600 shadow-xl">
<img className="h-[200px]" src={img1} alt="" />
<div className="card-body ">
 <h2 className="card-title text-2xl text-purple-600">Contest Hub</h2>
 <p>It is a contest competetion website.Any one can participate any contest by pay registration fee.</p>
 <p className="text-black font-semibold">Website Technologies which i have used : <span className="text-purple-600 text-lg">html, css,tailwind,daisyUi,mongoDb,firebase,react-router,express, tanstack query , react-hook-form, JWT</span></p>
 <div className="card-actions gap-10 ">
  <Link to="https://contest-website-4b439.web.app"> <span className="btn-link font-medium">Live Link</span></Link>
   <Link to="https://github.com/programming-hero-web-course1/b8a12-client-side-Zinath22"><span className="btn-link font-medium">Client Code</span></Link>
   <Link to="https://github.com/programming-hero-web-course1/b8a12-server-side-Zinath22"><span className="btn-link font-medium">Server Code</span></Link>
 </div>
</div>
</div>

{/* 2nd  */}

         <div className="card  card-compact  bg-base-100 shadow-purple-600 shadow-xl">
<img className="h-[200px]" src={img2} alt="" />
<div className="card-body ">
 <h2 className="card-title text-2xl text-purple-600">Food Love</h2>
 <p>It is a resturent management website.peaople can buy any food item</p>
 <p className="text-black font-semibold">Website Technologies which i have used :<span className="text-purple-600 text-lg">html, css,tailwind,daisyUi,mongoDb,firebase,react-router, JWT</span></p>
 <div className="card-actions gap-10 ">
  <Link to="https://restaurant-management-au-38278.web.app"> <span className="btn-link font-medium">Live Link</span></Link>
   <Link to="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-Zinath22"><span className="btn-link font-medium">Client Code</span></Link>
   <Link to="https://github.com/Porgramming-Hero-web-course/b8a11-server-side-Zinath22"><span className="btn-link font-medium">Server Code</span></Link>
 </div>
</div>
</div>

{/* 3rd  */}

         <div className="card  card-compact  bg-base-100 shadow-purple-600 shadow-xl">
<img className="h-[200px]" src={img3} alt="" />
<div className="card-body ">
 <h2 className="card-title text-2xl text-purple-600">Glamour & Grace</h2>
 <p>It is a contest competetion website.Any one can participate any contest by pay registration fee.</p>
 <p className="text-black font-semibold">Website Technologies which i have used : <span className="text-purple-600 text-lg">html, css,tailwind,daisyUi,mongoDb,firebase,react-router </span></p>
 <div className="card-actions gap-10 ">
  <Link to="https://cosmetics-and-beauty-shop.web.app"> <span className="btn-link font-medium">Live Link</span></Link>
   <Link to="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-Zinath22"><span className="btn-link font-medium">Client Code</span></Link>
   <Link to="https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-Zinath22"><span className="btn-link font-medium">Server Code</span></Link>
 </div>
</div>
</div>
     </div>
       </div>
    );
};

export default Projects;