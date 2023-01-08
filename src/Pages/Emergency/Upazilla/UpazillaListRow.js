import React from 'react';
import { FiMapPin } from "react-icons/fi";

const UpazillaListRow = ({ neededUpazilla }) => {

    const { _id, city, donation, upazilla } = neededUpazilla;

    return (
        <div class="p-2 sm:w-1/2 w-full text-rose-700">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiMapPin className='text-lg mr-5' />
                <span class="title-font font-medium">{upazilla}</span>
            </div>
        </div>
    );
};

export default UpazillaListRow;