import React from 'react';
import { Link } from 'react-router-dom';
import latest1 from '../../Assets/emergencyRelief/latest1.jpg';

const LatestEmergencies = () => {
    return (
        <Link to="/emergency" class="relative flex items-end w-1/2 bg-black h-96 group">
            <img
                alt="Modded Bike"
                src={latest1}
                class="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
            />

            <div
                class="relative w-full p-6 tracking-widest text-center text-white bg-rose-700 transition-colors sm:w-2/3 group-hover:bg-black"
            >
                <strong class="text-lg uppercase">
                    Tornado affected areas in Chattogram
                </strong>

                <p class="mt-1 text-xs font-medium uppercase">
                    Help in any way possible
                </p>
            </div>
        </Link>

    );
};

export default LatestEmergencies;