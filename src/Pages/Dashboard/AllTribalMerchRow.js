import React from 'react';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

const AllTribalMerchRow = ({ allMerch, refetch }) => {
    const { _id, name, color, size, img, collection, price } = allMerch;

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "This Tribal Merch will be deleted.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://givingtree.onrender.com/merchs/${_id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch()
                        })
                } else {
                }
            });
    }

    return (
        <tr className="hover">
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Contact" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td className='hidden md:table-cell'>
                ${price}
            </td>
            <td className='hidden md:table-cell'>
                {size}
            </td>
            <td className='hidden md:table-cell'>
                {collection}
            </td>
            <td className='hidden md:table-cell'>
                {color}
            </td>
            <td className='hidden lg:table-cell'><button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr >
    );
};

export default AllTribalMerchRow;