import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        
        message: '',
    });

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the specified URL with form data
            const response = await axios.post('https://vercel.com/zs-projects-044bf02e/portfoliowebsite/users', formData);

            // Log the response and show success message using SweetAlert2
            console.log('Post request successful', response.data);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your message has been sent successfully.',
            });

            // Clear the form after successful submission
            clearForm();
        } catch (error) {
            console.error('Error submitting form data:', error);

            // Show error message using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error while sending your message. Please try again later.',
            });
        }
    };

    // Function to clear the form data
    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="h-screen my-12" id="contact">
            <div>
                <h1 className="text-center mb-5 font-semibold text-3xl border-b-2 p-2 border-purple-600 text-purple-600 mx-auto w-full">Contact me</h1>
            </div>

            <div className="w-full p-4">
                <div className="flex flex-col justify-evenly items-center lg:flex-row-reverse">
                    <div className="flex text-purple-600 justify-start space-y-4 flex-col">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="border p-1 mb-3 border-purple-600"
                                placeholder="Name"
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <br />
                            <input
                                className="border mb-3 p-1 border-purple-600"
                                placeholder="Email"
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <br />
                            <textarea
                                placeholder="Your Message"
                                className="border mb-3 p-2 border-purple-600"
                                cols="30"
                                rows="3"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                            <br />
                            <button type="submit" className="btn bg-purple-600 text-white">Submit</button>
                        </form>
                    </div>

                    <div className="text-center lg:text-left mb-5">
                        <div className="text-left space-y-5 mb-6">
                            <p className="flex items-center gap-4"><FaEnvelope className="text-purple-600" />zinathfarhana22@gmail.com</p>
                            <p className="flex items-center gap-4"><FaLocationArrow className="text-purple-600" /> Rajshahi, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;