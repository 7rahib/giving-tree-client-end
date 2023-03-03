import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import AllEmergencyReliefRow from './AllEmergencyReliefRow';

const PersonalReliefs = () => {

    const user = useAuthState(auth);
    const email = user[0].email;

    const { data: personelReliefs, isLoading, refetch } = useQuery('personelReliefs', () => fetch(`http://localhost:5000/emergencyrelief/${email}`).then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }


    return (
        <div>
            <h5 className='text-xl font-semibold text-center'>Emergency Reliefs added by you</h5>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='hidden md:table-cell'>Volunteers and Duration</th>
                            <th className='hidden md:table-cell'>Phone Number</th>
                            <th className='hidden lg:table-cell'>Address</th>
                            <th className='hidden lg:table-cell'>Approve</th>
                            <th className='hidden lg:table-cell'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            personelReliefs?.map((personelRelief) => <AllEmergencyReliefRow
                                key={personelRelief._id}
                                emergencyRelief={personelRelief}
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

export default PersonalReliefs;