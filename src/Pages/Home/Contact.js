import { useForm } from '@formspree/react';
import React from 'react';
import Swal from 'sweetalert2';
import contact from '../../Assets/contact.jpg';

const Contact = () => {

    const [state, handleSubmit] = useForm("meqdwbaw");

    if (state.succeeded) {
        Swal.fire('Email recieved', 'Our support will contact you soon!', 'success')
    }

    return (
        <div className='mb-20'>
            <h3 className='text-3xl font-semibold text-center my-10'>Contact us</h3>
            <section className="relative flex flex-wrap lg:h-96 lg:items-center">
                <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src={contact}
                        alt=""
                    />
                </div>
                <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="max-w-lg mx-auto text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Send an email</h1>

                        <p className="mt-4 text-gray-500">
                            Contact our support team through email for any queries
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                        <div>
                            <label for="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Your email"
                                />

                                <span className="absolute inset-y-0 inline-flex items-center right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="msg" className="sr-only">Your Message</label>
                            <div className="relative">
                                <textarea
                                    type="message"
                                    id='message'
                                    name='message'
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Your Message"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
                            >Send
                            </button>
                        </div>
                    </form>
                </div>


            </section>
        </div>

    );
};

export default Contact;