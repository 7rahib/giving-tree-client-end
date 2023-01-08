import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AllEmergencyReliefRow = ({ emergencyRelief, refetch }) => {


    const user = useAuthState(auth);
    const email = user[0].email;
    const { _id, name, upazilla, city, number, img, isActive, duration, status } = emergencyRelief;
    const { data: users, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/users/${email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

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

    const handleAprove = (_id) => {
        swal({
            title: "Are you sure?",
            text: "This user Relief will be approved!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/emergencyrelief/${_id}`, {
                        method: 'PUT',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            if (res.status === 403) {
                                Swal.fire('Only an admin make a Relief Approved');
                            }
                            return res.json()
                        })
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                refetch();
                                Swal.fire(`Successfully made a Relief Approved`);
                            }

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
                {isActive}, and for {duration} days
            </td>
            <td className='hidden md:table-cell'>{number}</td>
            <td className='hidden lg:table-cell'>{upazilla}, {city}</td>
            {
                users[0]?.role === 'admin' ?
                    <td> {status === 'approved' ? <button className='btn btn-xs btn-success'>Approved</button> : <button onClick={() => handleAprove(_id)} className='btn btn-xs btn-warning'>Approve</button>}</td>
                    : <td><button className='btn btn-disabled btn-xs'>Not authorized</button></td>
            }
            <td className='hidden lg:table-cell'><button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr >
    );
};

export default AllEmergencyReliefRow;