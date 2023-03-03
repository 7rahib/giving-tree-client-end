import React from 'react';
import { useNavigate } from 'react-router-dom';

const RunningReliefsRow = ({ emergencyRelief, refetch }) => {

    const { _id, name, img, address, city, description } = emergencyRelief;
    const navigate = useNavigate();

    const viewDetails = (id) => {
        navigate(`/emergencydetails/${id}`);
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div onClick={() => viewDetails(_id)} to='/donate' className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-rose-100 p-6 rounded-lg h-full hover:bg-rose-200">
                    <img className="h-40 rounded w-full object-cover object-center mb-6 transition-opacity group-hover:opacity-80" src={img} alt="content" />
                    <h3 className="tracking-widest text-rose-700 text-xs font-medium title-font">{city}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{name} in {address}</h2>
                    <p className="leading-relaxed text-base">{description}</p>
                </div>
            </div>
        </>
    );
};

export default RunningReliefsRow;