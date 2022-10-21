import React from 'react';
import hero from '../../Assets/emergencyRelief/hero.jpg';
import LatestEmergencies from './LatestEmergencies';
import RunningReliefs from './RunningReliefs/RunningReliefs';

const Emergency = () => {
    return (
        <div>
            <section class="relative bg-white">
                <img
                    class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                    src={hero}
                    alt="Couple on a bed with a dog"
                />

                <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

                <div class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
                    <div class="max-w-xl text-center sm:text-left">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Help us providing
                            <strong class="font-extrabold text-rose-700 sm:block">
                                Emergency Relief
                            </strong>
                        </h1>

                        <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                            We response immediately with relief where it is needed
                        </p>

                        <div class="flex flex-wrap mt-8 text-center gap-4">
                            <a class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-700 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
                                Check Below
                            </a>

                            <a class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-700 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-20'>
                <h3 className='text-3xl text-center font-semibold mb-5'>Latest Crisis</h3>
                <div className='mt-10 p-2'>
                    <LatestEmergencies></LatestEmergencies>
                </div>
            </div>
            <RunningReliefs></RunningReliefs>
        </div>

    );
};

export default Emergency;