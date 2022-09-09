import React from 'react';
import running1 from '../../Assets/emergencyRelief/running1.jpg';
import running2 from '../../Assets/emergencyRelief/running2.jpg';
import running3 from '../../Assets/emergencyRelief/running3.jpg';
import latest1 from '../../Assets/emergencyRelief/latest1.jpg';
import { Link } from 'react-router-dom';

const RunningReliefs = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Running Emergency Reliefs</h1>
                        <div class="h-1 w-20 bg-rose-700 rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Providing immediate assistance to the victim. We are creating emergency reliefs for the locality and provide help to the people. We will find below the places where emergency reliefs are necessary.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <Link to='/donate' class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-rose-100 p-6 rounded-lg h-96">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={running1} alt="content" />
                            <h3 class="tracking-widest text-rose-700 text-xs font-medium title-font">Sunamganj</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Flood affected in Jamalganj</h2>
                            <p class="leading-relaxed text-base">People of Jamalganj upazilla of Sunamganj district are in a grave need of medicines and clean water</p>
                        </div>
                    </Link>
                    <Link to='/donate' class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-rose-100 p-6 rounded-lg h-96">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={running2} alt="content" />
                            <h3 class="tracking-widest text-rose-700 text-xs font-medium title-font">Sylhet</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Flood affected in Uposhohor</h2>
                            <p class="leading-relaxed text-base">There is a scarcity of food and clean water. Help our volunteers to provide locals with them</p>
                        </div>
                    </Link>
                    <Link to='/donate' class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-rose-100 p-6 rounded-lg h-96">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={running3} alt="content" />
                            <h3 class="tracking-widest text-rose-700 text-xs font-medium title-font">Rajshahi</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Earthquake in Rajshahi</h2>
                            <p class="leading-relaxed text-base">Several thousand people are displaced from their homes, they need immediate shelter and foods</p>
                        </div>
                    </Link>
                    <Link to='/donate' class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-rose-100 p-6 rounded-lg h-96">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={latest1} alt="content" />
                            <h3 class="tracking-widest text-rose-700 text-xs font-medium title-font">Chattogram</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Tornado affected areas</h2>
                            <p class="leading-relaxed text-base">Huge tornado uprooted millions of peopl from their homes, help them in any way possible</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RunningReliefs;