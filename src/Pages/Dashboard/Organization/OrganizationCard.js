import React from 'react';
import philantrophy from '../../../Assets/organisation/philantrophy.jpg';

const OrganizationCard = ({ product, refetch }) => {
    const { orgName, type, email, address, number } = product;
    return (
        <div className="relative block bg-black group">
            <img
                className="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
                src={philantrophy}
                alt=""
            />
            <div className="relative p-8">
                <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                    {type}
                </p>

                <p className="text-2xl font-bold text-white">{orgName}</p>

                <div className="mt-64">
                    <div
                        className="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0"
                    >
                        <p className="text-md text-white">
                            Email: {email}
                        </p>
                        <p className="text-md text-white">
                            Address: {address}
                        </p>
                        <p className="text-md text-white">
                            Number: {number}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrganizationCard;