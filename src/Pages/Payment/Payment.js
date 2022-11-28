import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Payment = (props) => {

    const user = useAuthState(auth);
    const { id } = useParams();
    const location = useLocation();
    const { data: individualRelief, isLoading } = useQuery('individualRelief', () => fetch(`http://localhost:5000/emergencyreliefs/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h3 className='text-3xl font-semibold m-5'>Payment</h3>
                <div className="card w-96 bg-base-100 shadow-xl mb-5">
                    <div className="card-body">
                        <h2 className="card-title">Hello {user[0]?.email}</h2>
                        <p>You are donating <span className='text-green-600 font-semibold'>${location.state}</span> for {individualRelief.name}</p>
                        <p>For futhur information you can contact <span className='text-red-600 font-semibold'>{individualRelief.email}</span> or <span className='text-red-600 font-semibold'>{individualRelief.number}</span> </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;