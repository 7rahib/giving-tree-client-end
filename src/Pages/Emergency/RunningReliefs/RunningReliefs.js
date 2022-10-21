import React from 'react';
import running1 from '../../../Assets/emergencyRelief/running1.jpg';
import running2 from '../../../Assets/emergencyRelief/running2.jpg';
import running3 from '../../../Assets/emergencyRelief/running3.jpg';
import latest1 from '../../../Assets/emergencyRelief/latest1.jpg';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import RunningReliefsRow from './RunningReliefsRow';
import Loading from '../../Shared/Loading';

const RunningReliefs = () => {


    const { data: emergencyReliefs, isLoading, refetch } = useQuery('emergencyReliefs', () => fetch('http://localhost:5000/emergencyrelief').then(res => res.json()))


    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Running Emergency Reliefs</h1>
                        <div class="h-1 w-20 bg-rose-700 rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Providing immediate assistance to the victim. We are creating emergency reliefs for the locality and provide help to the people. We will find below the places where emergency reliefs are necessary.</p>
                </div>
                <div class="flex flex-wrap m-4">

                    {
                        emergencyReliefs?.map((emergencyRelief) => <RunningReliefsRow
                            key={emergencyRelief._id}
                            emergencyRelief={emergencyRelief}
                            refetch={refetch}
                        >
                        </RunningReliefsRow>)
                    }
                </div>
            </div>
        </section>
    );
};

export default RunningReliefs;