import React from 'react';

const Faq = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center my-5">
                Frequently Asked Questions
            </h2>
            <div class="flow-root m-12">
                <div class="my-8 divide-y divide-gray-100">
                    <details class="group py-8" open>
                        <summary class="flex cursor-pointer items-center justify-between">
                            <h2 class="text-lg font-medium text-gray-900">
                                How do you respond immediately?
                            </h2>

                            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            We have volunteers all over the country to respond immediately when there is a crisis.
                        </p>
                    </details>

                    <details class="group py-8">
                        <summary class="flex cursor-pointer items-center justify-between">
                            <h2 class="text-lg font-medium text-gray-900">
                                How do we know about natural calamities?
                            </h2>

                            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            We have contacts in the Bangladesh Meteorological Department to get the latest updates.
                        </p>
                    </details>

                    <details class="group py-8">
                        <summary class="flex cursor-pointer items-center justify-between">
                            <h2 class="text-lg font-medium text-gray-900">
                                How do you know what people need?
                            </h2>

                            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            Our volunteers provide us with the necessary pieces of information regarding the crisis.
                        </p>
                    </details>
                </div>
            </div>

        </div>
    );
};

export default Faq;