import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const EmergencyDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: individualReliefs, isLoading } = useQuery('individualReliefs', () => fetch(`http://localhost:5000/emergencyreliefs/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section class="text-gray-600 body-font relative">
            <div>
                <button className='btn btn-xs btn-ghost mt-5 ml-5' onClick={() => navigate('/emergency')}>◀︎ Go Back</button>
                <h3 className='text-3xl font-semibold mt-5 ml-6'>{individualReliefs.name} details</h3>
            </div>
            <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4);" }}></iframe>
                    <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1">{individualReliefs.address}</p>
                            <p class="mt-1">{individualReliefs.city}</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Duration</h2>
                            <p class="text-indigo-500 leading-relaxed">{individualReliefs.duration} days</p>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed">{individualReliefs.number}</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">{individualReliefs.name}</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Is volunteer allowed? {individualReliefs.isActive}</p>
                    <img className='h-80 rounded w-full object-cover object-center mb-6 transition-opacity hover:opacity-80' src={individualReliefs.img} alt="" />
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                        <p id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">{individualReliefs.description}</p>
                    </div>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
                    <p class="text-xs text-gray-500 mt-3">For any queries you can contact our support</p>
                </div>
            </div>
        </section>
    );
};

export default EmergencyDetails;