import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Modal from 'react-modal';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { MdPermPhoneMsg } from "react-icons/md";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');

const EmergencyDetails = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [donationAmount, SetDonationAmount] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const [state, handleSubmit] = useForm("meqdwbaw");

    if (state.succeeded) {
        Swal.fire('Email recieved', 'Our support will contact you soon!', 'success')
    }

    console.log(donationAmount);

    const { data: individualReliefs, isLoading } = useQuery('individualReliefs', () => fetch(`http://localhost:5000/emergencyreliefs/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section class="text-gray-600 body-font">
            <button className='btn btn-xs btn-ghost mt-5 ml-5' onClick={() => navigate('/emergency')}>◀︎ Go Back</button>
            <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 pl-5">
                    <img class="object-cover object-center rounded" alt="hero" src={individualReliefs?.img} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{individualReliefs?.name}</h1>
                    <p class="text-xl mb-8 leading-relaxed">{individualReliefs?.description}</p>
                    <div class="w-full bg-white relative grid grid-cols-1 lg:grid-cols-2 py-8 rounded">
                        <div class="lg:w-3/4 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1 font-semibold text-gray-800">{individualReliefs?.address}, {individualReliefs?.upazilla}, {individualReliefs?.city}</p>
                            <h2 class="mt-3 title-font font-semibold text-gray-900 tracking-widest text-xs">Requierment</h2>
                            <p class="mt-1 font-semibold text-gray-800">{individualReliefs?.requirement}</p>
                        </div>
                        <div class="lg:w-1/3 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Duration</h2>
                            <p class="text-indigo-700 font-semibold leading-relaxed">{individualReliefs?.duration} days</p>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed font-semibold text-gray-800">{individualReliefs?.number}</p>
                        </div>
                    </div>
                    <div class="flex w-full md:justify-start justify-center items-end">
                        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                            <label for="hero-field" class="leading-7 text-xs text-gray-600">Make a donation of from $0.50 - $999,999.99 in USD</label>
                            <input onChange={(e) => SetDonationAmount(e.target.value)} type="text" id="donationAmount" name="donationAmount" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <Link state={donationAmount} to={`/payment/${individualReliefs?._id}`} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate</Link>
                    </div>
                    <p class="text-sm mt-2 text-gray-500 mb-8 w-full">All your donations goes to charity</p>
                    <div class="flex lg:flex-row md:flex-col">
                        <button onClick={openModal} class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                            <MdPermPhoneMsg className='text-2xl' />
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-gray-600 mb-1">For any query</span>
                                <span class="title-font font-medium">Contact Support</span>
                            </span>
                        </button>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='flex justify-end'>
                        <button className='btn btn-xs btn-transparent' onClick={closeModal}>X</button>
                    </div>
                    <div className='font-semibold'>Send us an email</div>
                    <form onSubmit={handleSubmit} className="w-96 space-y-4">
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
                </Modal>
            </div>
        </section>
    );
};

export default EmergencyDetails;