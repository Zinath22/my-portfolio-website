import { FaEnvelope, FaLocationArrow } from "react-icons/fa";



const Contact = () => {
    return (
        <div   className="h-[100vh]" id="contact">


<div className=" w-full p-4">
    <div className=" flex flex-col justify-evenly items-center  lg:flex-row-reverse">
       



        {/* <div className=" w-full max-w-sm  ">
            <form className="space-y-2">
                <div className="form-control">

                    <input type="text" name="name" placeholder="name" className="input  border-purple-500 input-bordered" required />
                </div>
                <div className="form-control">

                    <input type="email" name="email" placeholder="email" className="input input-warning input-bordered" required />
                </div>
               
                <div className="form-control">

                    <textarea className="textarea textarea-warning" placeholder="Message" required></textarea>


                </div>
                <div className="form-control mt-6">
                    <button className="btn  btn-outline text-purple-500 border-0 border-b-4  ">Send</button>
                </div>
            </form>
        </div> */}
         <div className="flex text-purple-500 justify-start items-center space-y-4 flex-col">
  <h2>Contact Me</h2>
  <input className="border p-1 border-purple-500" placeholder="Name" type="name" name="" id="" />
<input className="border p-1 border-purple-500" placeholder="Email" type="email" name="" id="" />
<textarea
placeholder="Your Message"
   className="border p-2 border-purple-500"
   cols="30"
   rows="3"
 ></textarea>
<button className="btn bg-purple-500 text-white">Submit</button>


</div>
        <div className="text-center lg:text-left mb-5">
            <div className="text-left  space-y-5 mb-6">
           
            <p className="flex items-center gap-4"><FaEnvelope className="text-purple-600"/>zinathfarhana22@gmail.com</p>
            <p className="flex items-center gap-4"><FaLocationArrow className="text-purple-600"/> Rajshahi,Bangladesh</p>

            </div>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            
        </div>
    </div>
</div>
</div>
    );
};

export default Contact;