import React from 'react';

const DonationsRow = ({ allDonation, index }) => {

    const { _id, donationAmount, donaterEmail, reliefName, transactionId, donationId } = allDonation;

    return (
        <tr className="hover">
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{reliefName}</div>
                    </div>
                </div>
            </td>
            <td className='table-cell'>
                ${donationAmount}
            </td>
            <td className='hidden md:table-cell'>{donaterEmail}</td>
            <td className='hidden lg:table-cell text-green-600 font-semibold'>{transactionId}</td>
        </tr >
    );
};

export default DonationsRow;