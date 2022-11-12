import React from 'react';

const VolunteerRow = ({ product, refetch }) => {
    const { name, interest, email, address, isActive, img } = product;

    return (
        <div class="relative bg-white py-4 px-4 rounded-3xl w-52 h-60 my-2 shadow hover:shadow-xl hover:bg-base-100">
            <div className='h-44'>
                <div className="avatar">
                    <div className="w-16 rounded-full shadow-xl">
                        <img src={img} alt='Volunteer' />
                    </div>
                </div>
                <div class="flex flex-col items-center mt-8">
                    <div>
                        <p class="text-md font-semibold my-2">{name}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between text-gray-500 text-sm">
                <p className='text-xs'>{interest}</p>
                <label htmlFor="my-modal-6" className='btn btn-xs btn-primary'>Details</label>
            </div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRow;