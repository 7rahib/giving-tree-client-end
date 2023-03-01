import React from 'react';

const AllTribalMerchOrdersRow = ({ order, index }) => {

    const { id, orderAmount, email, MerchName, transactionId } = order;

    return (
        <tr className="hover">
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{MerchName}</div>
                    </div>
                </div>
            </td>
            <td className='table-cell'>
                ${orderAmount}
            </td>
            <td className='hidden md:table-cell'>{email}</td>
            <td className='hidden lg:table-cell text-green-600 font-semibold'>{transactionId}</td>
            <td className='hidden lg:table-cell text-rose-600 font-semibold'>{id}</td>
        </tr >
    );
};

export default AllTribalMerchOrdersRow;