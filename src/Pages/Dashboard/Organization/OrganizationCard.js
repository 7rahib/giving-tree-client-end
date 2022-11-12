import React from 'react';
import philantrophy from '../../../Assets/organisation/philantrophy.jpg';

const OrganizationCard = ({ product, refetch }) => {
    const { orgName, type, email, address, number } = product;
    return (
        <div class="relative bg-white py-4 px-4 rounded-3xl w-44 h-44 my-2 shadow hover:shadow-xl hover:bg-base-100">
            <div className='h-32'>
                <div className="avatar">
                    <div className="w-16 rounded-full shadow-xl">
                        <img src={philantrophy} alt='Volunteer' />
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>
                        <p class="text-md font-semibold my-2">{orgName}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between text-gray-500 text-sm">
                <p className='text-xs'>{email}</p>
            </div>
        </div>

    );
};

export default OrganizationCard;