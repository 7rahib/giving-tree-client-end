import React from 'react';

const RunningReliefsRow = ({ emergencyRelief, refetch }) => {

    const { name, img, address, city, description } = emergencyRelief;

    return (
        <>
            <div to='/donate' class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-rose-100 p-6 rounded-lg h-96 hover:bg-rose-200">
                    <img class="h-40 rounded w-full object-cover object-center mb-6 transition-opacity group-hover:opacity-80" src={img} alt="content" />
                    <h3 class="tracking-widest text-rose-700 text-xs font-medium title-font">{city}</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{name} in {address}</h2>
                    <p class="leading-relaxed text-base">{description}</p>
                </div>
            </div>
        </>
    );
};

export default RunningReliefsRow;