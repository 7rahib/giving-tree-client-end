import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DonationsRow from './DonationsRow';

const AllDonations = () => {

    const { data: allDonations, isLoading, refetch } = useQuery('allDonations', () => fetch('http://localhost:5000/donations').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }


    return (
        <div>
            <h5 className='text-xl font-semibold text-center'>All Donations</h5>
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
                            allDonations?.map((allDonation, index) => <DonationsRow
                                key={allDonation._id}
                                allDonation={allDonation}
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

export default AllDonations;