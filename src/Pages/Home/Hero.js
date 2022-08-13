import React from 'react';
import hero2 from '../../Assets/hero2.jpg';

const Hero = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={hero2} class="max-w-sm rounded-lg shadow-2xl" alt='#'/>
                    <div>
                        <h1 class="text-7xl font-bold">Help <br /> Anywhere <br /> Anytime</h1>
                        <p className='py-6 pr-6 text-2xl'>A place to check recent Fund-Raisers, Donate when crisis arrives and Help others in anyway possible.</p>
                        <button class="btn btn-primary">Start Helping</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;