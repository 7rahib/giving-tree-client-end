import React from 'react';
import { FiMapPin } from "react-icons/fi";

const UpazillaListRow = ({ neededUpazilla }) => {

    const { city, upazilla } = neededUpazilla;

    return (
        <div class="p-2 sm:w-1/2 w-full text-rose-700">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center  hover:bg-gray-200">
                <FiMapPin className='text-lg mr-5' />
                <span class="title-font font-medium">{upazilla}, {city}</span>
            </div>
        </div>
    );
};

export default UpazillaListRow;