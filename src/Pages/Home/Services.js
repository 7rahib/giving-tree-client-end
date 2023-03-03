import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className='mt-20'>
            <div className="px-4 py-16 max-w sm:px-6 lg:px-8">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
                >
                    <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our all services</h2>

                        <p className="mt-4 text-gray-600">
                            Helping others makes us happy but it matters how we do it. Are we giving to the right people who needs our help? Does our money making a worth difference? The giving tree is a place where you can find the answer of these question.
                        </p>

                        <a
                            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                            href="/get-started"
                        >
                            <span className="text-sm font-medium">About us</span>

                            <svg
                                className="w-5 h-5 ml-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <Link
                            className="block p-4 border bg-base-200 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            to="/emergency"
                        >
                            <h6 className="mt-2 font-bold">Emergency Relief</h6>
                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Providing immediate assistance to the affected areas
                            </p>
                        </Link>


                        <Link
                            className="block p-4 border bg-base-200 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            to="/tribalMerch"
                        >
                            <h6 className="mt-2 font-bold">Tribal Merch</h6>
                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Where you can buy original artwork and handcrafts made by tribal community
                            </p>
                        </Link>

                        <Link to='/allrunningreliefs'
                            className="block p-4 border bg-base-200 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                        >
                            <h6 className="mt-2 font-bold">Donations</h6>
                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Contribute to the trustworthy local institution and charitable organisations
                            </p>
                        </Link>


                        <Link to='/allrunningreliefs'
                            className="block p-4 border bg-base-200 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                        >
                            <h6 className="mt-2 font-bold">Fundraiser</h6>
                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Community helping needy people and homeless
                            </p>
                        </Link>

                        <Link
                            className="block p-4 border bg-base-200 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            to="/dashboard/volunteers"
                        >
                            <h6 className="mt-2 font-bold">Volunteer</h6>
                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                All our volunteer working with us for immediate responses
                            </p>
                        </Link>
                        <Link
                            className="block p-4 border bg-base-200 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                            to="dashboard/organizations"
                        >
                            <h6 className="mt-2 font-bold">Organisation</h6>
                            <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                Organisastions who have joined forces with us to help for the cause
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;