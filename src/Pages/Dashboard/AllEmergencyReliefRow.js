import React from 'react';
import swal from 'sweetalert';

const AllEmergencyReliefRow = ({ emergencyRelief, refetch }) => {

    const { _id, name, address, city, number, img, isActive, duration } = emergencyRelief;

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "This Emergency Relief will be deleted.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/emergencyrelief/${_id}`, {
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
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
                {isActive}, and for {duration} days
            </td>
            <td className='hidden md:table-cell'>{number}</td>
            <td className='hidden lg:table-cell'>{address}, {city}</td>
            <td className='hidden lg:table-cell'><button className='btn btn-xs btn-primary'>Completed</button></td>
            <td className='hidden lg:table-cell'><button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default AllEmergencyReliefRow;