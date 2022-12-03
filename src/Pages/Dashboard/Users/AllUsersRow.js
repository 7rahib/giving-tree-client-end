import React from 'react';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

const AllUsersRow = ({ user, index, refetch }) => {

    const { _id, email, role } = user;

    const handleDelete = _id => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/${_id}`, {
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

    const makeAdmin = email => {

        swal({
            title: "Are you sure?",
            text: "This user will have Admin power!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/user/admin/${email}`, {
                        method: 'PUT',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            if (res.status === 403) {
                                Swal.fire('Only an admin make make another admin');
                            }
                            return res.json()
                        })
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                refetch();
                                Swal.fire(`Successfully made an admin`);
                            }

                        })
                } else {
                }
            });
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin' ? <button className="btn btn-xs btn-success text-black" disabled="disabled">Already Admin</button> : <button onClick={() => makeAdmin(email)} className="btn btn-warning btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error text-white'>Remove</button></td>
        </tr>
    );
};

export default AllUsersRow;