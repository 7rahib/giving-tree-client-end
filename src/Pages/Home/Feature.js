import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className="py-16 bg-base-100 overflow-hidden">
            <div className="container px-6 space-y-8 md:px-12 m-2">
                <div>
                    <span className="text-3xl font-semibold text-center text-primary">Assistance we provide during emergency situations</span>
                    <h2 className="mt-4 text-2xl font-bold md:text-4xl">We act instant when danger calls <br className="lg:block" hidden /> and respond when needed</h2>
                </div>
                <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div className="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl font-medium transition group-hover:text-primary">Provide instant food rations</h5>
                                <p className="text-sm">Give food rations to affected areas as soon as possible</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div className="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl font-medium transition group-hover:text-primary">Man Power</h5>
                                <p className="text-sm">We have volunteer from everywhere to act immediately</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div className="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl font-medium transition group-hover:text-primary">Give what needed</h5>
                                <p className="text-sm">We contact our volunteers and try to gather things that are necessary for the locals</p>
                            </div>
                        </div>
                    </div>
                    <Link to='/emergency' className="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block hover:bg-gray-300">
                        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-gray-300 group-hover:scale-90">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration" />

                            <div className="space-y-2">
                                <h5 className="text-xl font-medium transition group-hover:text-secondary">Visit Emergency Relief Section</h5>
                                <p className="text-sm ">Check out emergencies happening countrywise</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Feature;