import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import DonationsRow from './DonationsRow';

const PersonalDonations = () => {

    const user = useAuthState(auth);
    const email = user[0]?.email;
    const { data: personalDonations, isLoading, refetch } = useQuery('personalDonations', () => fetch(`http://localhost:5000/donations/${email}`).then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <h5 className='text-xl font-semibold text-center'>All Personal Donations</h5>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Relief Name</th>
                            <th className='md:table-cell'>Amount</th>
                            <th className='hidden md:table-cell'>Email</th>
                            <th className='hidden lg:table-cell'>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            personalDonations?.map((personalDonation, index) => <DonationsRow
                                key={personalDonation._id}
                                allDonation={personalDonation}
                                refetch={refetch}
                                index={index}
                            >
                            </DonationsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PersonalDonations;