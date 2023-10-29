import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const UpazillaDonationsRow = ({ upazillaInfo, refetch }) => {

    const user = useAuthState(auth);
    const email = user[0].email;
    const { _id, donation, upazilla, city } = upazillaInfo;
    const { data: users, isLoading } = useQuery('users', () => fetch(`https://givingtree.onrender.com/users/${email}`).then(res => res.json()))

    const handleDonation = (_id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://givingtree.onrender.com/upazilla/${_id}`, {
                        method: 'PUT',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            if (res.status === 403) {
                                Swal.fire('Only an admin can alter');
                            }
                            return res.json()
                        })
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                refetch();
                                Swal.fire(`This Upazilla has been provided with relief`);
                            }

                        })
                } else {
                }
            });
    }
    const noDonation = (_id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://givingtree.onrender.com/upazillas/${_id}`, {
                        method: 'PUT',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            if (res.status === 403) {
                                Swal.fire('Only an admin can alter');
                            }
                            return res.json()
                        })
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                refetch();
                                Swal.fire(`This Upazilla has not been provided with relief`);
                            }

                        })
                } else {
                }
            });
    }

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "This Upazilla will be deleted.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://givingtree.onrender.com/upazillas/${_id}`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <tr className="hover">
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{upazilla}</div>
                    </div>
                </div>
            </td>
            <td className='hidden lg:table-cell'>{city}</td>
            <td className='hidden md:table-cell'>
                21.01.2023
            </td>
            {
                users[0]?.role === 'admin' ?
                    <td> {donation === 'Given' ? <button onClick={() => noDonation(_id)} className='btn btn-xs btn-success'>Given</button> : <button onClick={() => handleDonation(_id)} className='btn btn-xs btn-warning'>Not Given</button>}</td>
                    : <td><button className='btn btn-disabled btn-xs'>Not authorized</button></td>
            }
            <td className='hidden lg:table-cell'><button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button></td>

        </tr>
    );
};

export default UpazillaDonationsRow;