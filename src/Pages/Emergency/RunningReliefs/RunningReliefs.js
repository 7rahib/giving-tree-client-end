import React from 'react';
import { useQuery } from 'react-query';
import RunningReliefsRow from './RunningReliefsRow';
import Loading from '../../Shared/Loading';
import { Link } from 'react-router-dom';

const RunningReliefs = () => {

    const { data: emergencyReliefs, isLoading, refetch } = useQuery('emergencyReliefs', () => fetch('http://localhost:5000/emergencyrelief').then(res => res.json()))


    if (isLoading) {
        <Loading></Loading>
    }

    const scrollOnTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <section className="text-gray-600 body-font mb-12">
            <div className="container px-5 pt-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Running Emergency Reliefs</h1>
                        <div className="h-1 w-20 bg-rose-700 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Providing immediate assistance to the victim. We are creating emergency reliefs for the locality and provide help to the people. We will find below the places where emergency reliefs are necessary.</p>
                </div>
                <div className="flex flex-wrap m-4">

                    {
                        emergencyReliefs?.slice(0, 8).reverse().map((emergencyRelief) => <RunningReliefsRow
                            key={emergencyRelief._id}
                            emergencyRelief={emergencyRelief}
                            refetch={refetch}
                        >
                        </RunningReliefsRow>)
                    }
                </div>
            </div>
            <div className='flex justify-end mr-12 mt-[-12px]'>
                <Link to='/allrunningreliefs' onClick={scrollOnTop} className="btn btn-sm btn-error text-white">See All</Link>
            </div>
        </section>
    );
};

export default RunningReliefs;