import React, { useEffect, useState } from 'react';
import RunningReliefsRow from './RunningReliefsRow';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RunningReliefs = () => {

    let arrayList = [];
    const [approvedReliefs, setApprovedReliefs] = useState([]);

    // const { data: emergencyReliefs, isLoading, refetch } = useQuery('emergencyReliefs', () => fetch('https://givingtree.onrender.com/emergencyrelief').then(res => res.json()))

    useEffect(() => {
        fetch(`https://givingtree.onrender.com/emergencyrelief`).then((res) =>
            res.json().then((data) => {
                arrayList = data.filter((data) => data.status === 'approved');
                setApprovedReliefs(arrayList);
            })
        );
    }, []);

    // if (isLoading) {
    //     <Loading></Loading>
    // }

    const scrollOnTop = () => {
        window.scrollTo(0, 0);
    }

    return (

        <section className="text-gray-600 body-font mb-12">
            <div className="container px-5 pt-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Running Emergency Reliefs and Donations</h1>
                        <div className="h-1 w-20 bg-rose-700 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Providing immediate assistance to the victim. We are creating emergency reliefs for the locality and provide help to the people. We will find below the places where emergency reliefs are necessary.</p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-wrap m-4">

                        {
                            approvedReliefs?.slice(0, 8).reverse().map((emergencyRelief) => <RunningReliefsRow
                                key={emergencyRelief._id}
                                emergencyRelief={emergencyRelief}
                            // refetch={refetch}
                            >
                            </RunningReliefsRow>)
                        }

                    </div>
                </motion.div>
            </div>
            <div className='flex justify-end mr-12 mt-[-12px]'>
                <Link to='/allrunningreliefs' onClick={scrollOnTop} className="btn btn-sm bg-rose-700 text-white">See All</Link>
            </div>
        </section>
    );
};

export default RunningReliefs;