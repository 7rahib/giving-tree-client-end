import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LatestEmergencyRow = ({ latestRelief }) => {

    const { _id, name, img, city } = latestRelief;
    const navigate = useNavigate();

    const viewDetails = (id) => {
        navigate(`/emergencydetails/${id}`);
        window.scrollTo(0, 0);
    }

    return (
        <div onClick={() => viewDetails(_id)}>
            <Link to="/emergency" className="relative flex items-end w-full bg-black h-96 group">
                <img
                    alt="Modded Bike"
                    src={img}
                    className="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-60"
                />

                <div
                    className="relative w-full p-6 tracking-widest text-center text-white bg-rose-700 transition-colors sm:w-2/3 group-hover:bg-black"
                >
                    <strong className="text-lg uppercase">
                        {name} in {city}
                    </strong>

                    <p className="mt-1 text-xs font-medium uppercase">
                        Help in any way possible
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default LatestEmergencyRow;