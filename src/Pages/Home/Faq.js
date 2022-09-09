import React from 'react';
import { Link } from 'react-router-dom';
import faq from '../../Assets/faq.jpg';

const Faq = () => {
    return (
        <div>
            <h2 class="text-3xl font-semibold text-center my-5">
                Frequently Asked Questions
            </h2>
            <div className='flex justify-between min-h-screen'>
                <div class="mx-auto p-5 bg-white rounded-lg  ">
                    <div class="mt-8 space-y-8">
                        <div>
                            <div class="flex items-start">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-primary text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6">
                                    How do you response immediately?
                                </p>
                            </div>

                            <div class="flex items-start mt-3">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6 text-gray-800">
                                    We have volunteers all over the country to response when there is a crisis.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-start">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-primary text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6">
                                    How do we know about natural calamities?
                                </p>
                            </div>

                            <div class="flex items-start mt-3">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6 text-gray-800">
                                    We have contacts in the Bangladesh Meteorological Department to get latest updates.
                                </p>
                            </div>

                        </div>
                        <div>
                            <div class="flex items-start">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-primary text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6">
                                    Can anyone join as a volunteer?
                                </p>
                            </div>

                            <div class="flex items-start mt-3">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6 text-gray-800">
                                    Yes, any of you guys can join us as a volunteer.
                                </p>
                            </div>

                        </div>
                        <div>
                            <div class="flex items-start">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-primary text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6">
                                    How do you know about what the people need?
                                </p>
                            </div>

                            <div class="flex items-start mt-3">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6 text-gray-800">
                                    Our volunteers provide us with necessary informations regarding rhe crisis.
                                </p>
                            </div>

                        </div>
                        <div>
                            <div class="flex items-start">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-primary text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6">
                                    How sponsor the child works?
                                </p>
                            </div>

                            <div class="flex items-start mt-3">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6 text-gray-800">
                                    Anyone can take responsibilty of a child's expenses. Check out more in <Link className='text-primary' to='/sponsorChild'>Spondor a child</Link>
                                </p>
                            </div>

                        </div>
                        <div>
                            <div class="flex items-start">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-primary text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6">
                                    Do you work with organisations?
                                </p>
                            </div>

                            <div class="flex items-start mt-3">
                                <div>
                                    <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>

                                <p class="ml-4 md:ml-6 text-gray-800">
                                    Yes, we work with several organisations who are dedicated for the cause.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <img
                        class="w-full h-full"
                        src={faq}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Faq;