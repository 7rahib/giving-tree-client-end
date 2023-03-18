import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Modal from 'react-modal';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';
import { useState } from 'react';

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
        <section class="text-gray-600 body-font relative">
            <div>
                <button className='btn btn-xs btn-ghost mt-5 ml-5' onClick={() => navigate('/emergency')}>◀︎ Go Back</button>

                <h3 className='text-3xl font-semibold mt-5 ml-6'>{individualReliefs?.name} details</h3>
            </div>
            <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4);" }}></iframe>
                    <div class="w-full bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1 font-semibold text-gray-800">{individualReliefs?.address}, {individualReliefs?.city}</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Duration</h2>
                            <p class="text-indigo-700 font-semibold leading-relaxed">{individualReliefs?.duration} days</p>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed font-semibold text-gray-800">{individualReliefs?.number}</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <p id="email" name="email" className="w-full text-sm">{individualReliefs?.email}</p>
                    <h2 class="text-gray-900 text-xl mb-1 font-medium title-font">{individualReliefs?.name}</h2>
                    <img className='h-80 rounded w-full object-cover object-center mb-6 transition-opacity hover:opacity-80' src={individualReliefs?.img} alt="" />
                    <div class="relative mb-4">
                        <label for="message" class="text-sm text-gray-800 font-semibold">Message</label>
                        <p id="message" name="message" class="w-full text-lg">{individualReliefs?.description}</p>
                    </div>
                    <label className='text-xs text-gray-400' htmlFor="donationAmount">Make a donation of from $0.50 - $999,999.99 in USD.</label>
                    <form className='flex justify-start items-center'>
                        <input type="number" id="donationAmount"
                            onChange={(e) => SetDonationAmount(e.target.value)}
                            name="donationAmount" placeholder="Enter Amount" className="input input-bordered w-full max-w-xs"
                            min="1" max="5" />
                        <Link state={donationAmount} to={`/payment/${individualReliefs?._id}`} class="ml-2 btn btn-md btn-primary">Donate</Link>
                    </form>
                    <div className='flex mt-3'>
                        <p class="text-xs text-gray-500 mt-1">For any queries, you can contact our support</p>
                        <button onClick={openModal} class="btn btn-xs btn-trans ml-2">Contact</button>
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