import React from 'react';
import tribalfeature1 from '../../Assets/tribal/tribalfeature1.jpg';
import tribalfeature2 from '../../Assets/tribal/tribalfeature2.jpg';
import tribalfeature3 from '../../Assets/tribal/tribalfeature3.jpg';

const TribalFeature = () => {
    return (
        <section>
            <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header class="text-center">
                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                        New Collection
                    </h2>

                    <p class="max-w-md mx-auto mt-4 text-gray-500">
                        Checkout our Featured Handmade Goods by The Tribal Peoples of Bangladesh
                    </p>
                </header>

                <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <div class="relative block group">
                            <img
                                src={tribalfeature2}
                                alt=""
                                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                class="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <a className="block w-full px-8 py-2 text-sm font-medium text-white rounded shadow bg-green-700 sm:w-auto" href="/get-started">
                                    Check Handmade Shirts Below ↓
                                </a>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="relative block group">
                            <img
                                src={tribalfeature1}
                                alt=""
                                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                class="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <a className="block w-full px-8 py-2 text-sm font-medium text-white rounded shadow bg-green-700 sm:w-auto" href="/get-started">
                                    Check Handmade Pants Below ↓
                                </a>
                            </div>
                        </div>
                    </li>

                    <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <div class="relative block group">
                            <img
                                src={tribalfeature3}
                                alt=""
                                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                class="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <a className="block w-full px-8 py-2 text-sm font-medium text-white rounded shadow bg-green-700 sm:w-auto" href="/get-started">
                                    Check Handmade Decorative Items Below ↓
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    );
};

export default TribalFeature;