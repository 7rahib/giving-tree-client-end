import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllEmergencyReliefRow from './AllEmergencyReliefRow';

const AllEmergencyReliefs = () => {

    const { data: emergencyReliefs, isLoading, refetch } = useQuery('emergencyReliefs', () => fetch('http://localhost:5000/emergencyrelief').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <h5 className='text-xl font-semibold text-center'>All Emergency Reliefs</h5>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='hidden md:table-cell'>Volunteers and Duration</th>
                            <th className='hidden md:table-cell'>Phone Number</th>
                            <th className='hidden lg:table-cell'>Adress</th>
                            <th className='hidden lg:table-cell'>Approve</th>
                            <th className='hidden lg:table-cell'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emergencyReliefs?.map((emergencyRelief, index) => <AllEmergencyReliefRow
                                key={emergencyRelief._id}
                                emergencyRelief={emergencyRelief}
                                refetch={refetch}
                            >
                            </AllEmergencyReliefRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEmergencyReliefs;