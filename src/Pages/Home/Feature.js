import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div class="py-16 bg-base-100 overflow-hidden">
            <div class="container px-6 space-y-8 md:px-12 m-2">
                <div>
                    <span class="text-3xl font-semibold text-center text-primary">Assistance we provide during emergency situations</span>
                    <h2 class="mt-4 text-2xl font-bold md:text-4xl">We act instant when danger calls <br class="lg:block" hidden /> and respond when needed</h2>
                </div>
                <div class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl font-medium transition group-hover:text-primary">Provide instant food rations</h5>
                                <p class="text-sm">Give food rations to affected areas as soon as possible</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl font-medium transition group-hover:text-primary">Man Power</h5>
                                <p class="text-sm">We have volunteer from everywhere to act immediately</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl font-medium transition group-hover:text-primary">Give what needed</h5>
                                <p class="text-sm">We contact our volunteers and try to gather things that are necessary for the locals</p>
                            </div>
                        </div>
                    </div>
                    <Link to='/emergency' class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block hover:bg-gray-300">
                        <div class="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-gray-300 group-hover:scale-90">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl font-medium transition group-hover:text-secondary">Visit Emergency Relief Section</h5>
                                <p class="text-sm ">Check out emergencies happening countrywise</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Feature;