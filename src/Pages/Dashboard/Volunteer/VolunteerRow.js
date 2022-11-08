import React from 'react';

const VolunteerRow = ({ product, refetch }) => {
    const { name, interest, email, address, isActive, img } = product;

    return (
        <div className="flex flex-col justify-between w-72 sm:max-w h-96 bg-white bg-center text-gray-800 overflow-hidden cursor-pointer mt-5"
            style={{ backgroundImage: `url(${img})` }}>
            <div className="flex justify-between items-center ml-4 pr-8">
                <div className="bg-white text-black bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">{interest}</div>
                <div className="bg-white w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-black rounded-b-full">{isActive}</div>
            </div>
            <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <h3 className="text-xl font-bold pb-2">{name}</h3>
                <p className="truncate text-gray-500 text-sm">{address}</p>
                <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs">{email}</span>
                </div>
                <button className="btn btn-xs mt-2 btn-primary">Contact</button>
            </div>
        </div >
    );
};

export default VolunteerRow;