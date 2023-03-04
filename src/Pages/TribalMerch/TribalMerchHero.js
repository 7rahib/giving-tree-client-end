import React from 'react';
import hero from '../../Assets/tribal/hero.jpg';

const TribalMerchHero = () => {
    return (
        <div>
            <section className="relative bg-white">
                <img
                    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                    src={hero}
                    alt="Tribal Merch Hero"
                />

                <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

                <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-2xl font-extrabold sm:text-4xl">
                            <strong className="font-extrabold text-green-700 sm:block mt-1">
                                Tribal Merch
                            </strong>
                            Help the unprivileged
                        </h1>

                        <p className="max-w-xl mt-4 sm:leading-relaxed sm:text-lg">
                            We get the handmade products right to your doorstep!
                        </p>

                        <div className="flex flex-wrap mt-8 text-center gap-4">
                            <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-700 sm:w-auto active:bg-green-500 hover:bg-green-700 focus:outline-none focus:ring">
                                Check Below ↓
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TribalMerchHero;