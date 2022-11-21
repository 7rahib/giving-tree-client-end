import React from 'react';

const AllUsersRow = ({ user, index }) => {

    const { _id, email, role } = user;

    const handleDelete = (_id) => {
        console.log(_id);
    }

    const makeAdmin = (email) => {
        console.log(email);
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