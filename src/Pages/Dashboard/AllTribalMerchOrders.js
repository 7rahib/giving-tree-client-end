import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllTribalMerchOrdersRow from './AllTribalMerchOrdersRow';

const AllTribalMerchOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order').then(res => res.json()))

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
                            <th></th>
                            <th>Merch Name</th>
                            <th className='md:table-cell'>Amount</th>
                            <th className='hidden md:table-cell'>Client Email</th>
                            <th className='hidden lg:table-cell'>Transaction ID</th>
                            <th className='hidden lg:table-cell'>Product ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <AllTribalMerchOrdersRow
                                key={order._id}
                                order={order}
                                refetch={refetch}
                                index={index}
                            >
                            </AllTribalMerchOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTribalMerchOrders;