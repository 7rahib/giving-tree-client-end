import React from 'react';
import { Link } from 'react-router-dom';

const LatestEmergencyRow = ({ latestRelief }) => {

    const { name, img, city } = latestRelief;

    return (
        <div>
            <Link to="/emergency" class="relative flex items-end w-full bg-black h-96 group">
                <img
                    alt="Modded Bike"
                    src={img}
                    class="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-60"
                />

                <div
                    class="relative w-full p-6 tracking-widest text-center text-white bg-rose-700 transition-colors sm:w-2/3 group-hover:bg-black"
                >
                    <strong class="text-lg uppercase">
                        {name} in {city}
                    </strong>

                    <p class="mt-1 text-xs font-medium uppercase">
                        Help in any way possible
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default LatestEmergencyRow;