import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L1nRnCw3Fp4zZCe6a6dxsGv4FpwYVVmI24zJ4qBXJk7Dsd2ntYrfvBHe9I2cL8U9j48GR05Rpo0GIY2X1heHpjB009X3WqG7s');

const Payment = (props) => {

    const navigate = useNavigate();
    const user = useAuthState(auth);
    const { id } = useParams();
    const location = useLocation();
    const { data: individualRelief, isLoading } = useQuery('individualRelief', () => fetch(`http://localhost:5000/emergencyreliefs/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <button className='btn btn-xs btn-ghost mt-5 ml-5' onClick={() => navigate('/emergency')}>◀︎ Go Back</button>
            <div className='flex justify-center items-center mb-36'>
                <div>
                    <h3 className='text-3xl font-semibold m-5'>Payment</h3>
                    <div className="card w-full mb-5">
                        <div className="card-body">
                            <h2 className="card-title">Hello {user[0]?.email},</h2>
                            <p>You are donating <span className='text-green-600 font-semibold'>${location.state}</span> for {individualRelief.name}</p>
                            <p>For futhur information you can contact our support.</p>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm price={location.state} individualRelief={individualRelief} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;