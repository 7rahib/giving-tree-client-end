import React from 'react';
import { useNavigate } from 'react-router-dom';

const TribalPantsRow = ({ pantMerch, refecth }) => {

    const { _id, name, price, img } = pantMerch;
    const navigate = useNavigate();

    const viewDetails = (id) => {
        navigate(`/tribalmerchdescription/${id}`);
    }

    return (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div onClick={() => viewDetails(_id)} class="group block overflow-hidden">
                <div class="relative h-[350px] sm:h-[450px]">
                    <img
                        src={img}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover scale-100 duration-700 group-hover:scale-125 group-hover:duration-700"
                    />
                </div>

                <div class="relative bg-white pt-3">
                    <h3
                        class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                        {name}
                    </h3>

                    <p class="mt-1.5 tracking-wide text-gray-900">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default TribalPantsRow;