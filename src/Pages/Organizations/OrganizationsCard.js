import React from 'react';
import philantrophy from '../../Assets/organisation/philantrophy.jpg';

const OrganizationsCard = ({ product, refetch }) => {
    const { orgName, type, email, address, number } = product;
    return (
        <div class="relative block bg-black group">
            <img
                class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
                src={philantrophy}
                alt=""
            />
            <div class="relative p-8">
                <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                    {type}
                </p>

                <p class="text-2xl font-bold text-white">{orgName}</p>

                <div class="mt-64">
                    <div
                        class="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0"
                    >
                        <p class="text-md text-white">
                            Email: {email}
                        </p>
                        <p class="text-md text-white">
                            Address: {address}
                        </p>
                        <p class="text-md text-white">
                            Number: {number}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrganizationsCard;