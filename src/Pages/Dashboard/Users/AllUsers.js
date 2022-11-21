import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AllUsersRow from './AllUsersRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    console.log(users);

    return (
        <div>
            <h5 className='text-xl font-semibold text-center'>All Emergency Reliefs</h5>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AllUsersRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            >
                            </AllUsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;