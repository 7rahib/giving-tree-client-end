import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllTribalMerchRow from './AllTribalMerchRow';

const AllTribalMerch = () => {

    const { data: allMerchs, isLoading, refetch } = useQuery('allMerchs', () => fetch('https://givingtree.onrender.com/merchs').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <h5 className='text-xl font-semibold text-center'>All Tribal Merchs</h5>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='hidden lg:table-cell'>Price</th>
                            <th className='hidden md:table-cell'>Size</th>
                            <th className='hidden lg:table-cell'>Collection</th>
                            <th className='hidden md:table-cell'>Color</th>
                            <th className='hidden lg:table-cell'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allMerchs?.map((allMerch, index) => <AllTribalMerchRow
                                key={allMerch._id}
                                allMerch={allMerch}
                                refetch={refetch}
                            >
                            </AllTribalMerchRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTribalMerch;