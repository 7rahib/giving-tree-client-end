import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import RunningReliefsRow from './RunningReliefsRow';

const AllRunningReliefs = () => {

    let arrayList = [];
    const navigate = useNavigate();
    const [approvedReliefs, setApprovedReliefs] = useState([]);

    // const { data: emergencyReliefs, isLoading, refetch } = useQuery('emergencyReliefs', () => fetch('http://localhost:5000/emergencyrelief').then(res => res.json()))

    useEffect(() => {
        fetch(`http://localhost:5000/emergencyrelief`).then((res) =>
            res.json().then((data) => {
                arrayList = data.filter((data) => data.status === 'approved');
                setApprovedReliefs(arrayList);
            })
        );
    }, []);

    // if (isLoading) {
    //     <Loading></Loading>
    // }

    return (
        <section className="text-gray-600 body-font mb-12">
            <button className='btn btn-xs btn-ghost mt-5 ml-5' onClick={() => navigate('/emergency')}>◀︎ Go Back</button>
            <div className="container px-5 pt-12 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Running Emergency Reliefs</h1>
                        <div className="h-1 w-20 bg-rose-700 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Providing immediate assistance to the victim. We are creating emergency reliefs for the locality and provide help to the people. We will find below the places where emergency reliefs are necessary.</p>
                </div>
                <div className="flex flex-wrap m-4">

                    {
                        approvedReliefs?.map((emergencyRelief) => <RunningReliefsRow
                            key={emergencyRelief._id}
                            emergencyRelief={emergencyRelief}
                        // refetch={refetch}
                        >
                        </RunningReliefsRow>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllRunningReliefs;