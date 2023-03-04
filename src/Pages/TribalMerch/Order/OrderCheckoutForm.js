import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const OrderCheckoutForm = ({ price, individualMerch }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const user = useAuthState(auth);
    const email = user[0]?.email;

    const id = individualMerch ? individualMerch[0]?._id : 0;
    const name = individualMerch ? individualMerch[0]?.name : 0;


    useEffect(() => {
        if (price) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        setCardError(error?.message || '');
        setSuccess('');

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        )

        if (intentError) {
            setCardError(intentError?.message);
        }
        if (processing) {
            return <Loading></Loading>
        }
        else {
            setCardError('');

            if (paymentIntent.status === "succeeded") {
                console.log('card info', card);
                // store payment info in the database
                const payment = {
                    orderAmount: price,
                    transactionId: paymentIntent.id,
                    email: email,
                    MerchName: name,
                    id: id
                }
                fetch('http://localhost:5000/order', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(payment)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            setSuccess(`Congratulations! You just ordered ${name} for $${price}.`)
                            setTransactionId(paymentIntent.id);
                        }
                    })
            }

            setProcessing(false);
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#a6a7b3',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex justify-end'>
                    <button className='btn btn-primary btn-xs mt-5' type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-error'>{cardError}</p>
            }
            {
                success && <div className='text-black'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-success font-semibold">{transactionId}</span> </p>
                    <p className='text-xs text-gray-400'>Don't share with anybody</p>
                </div>
            }
        </>
    );
};

export default OrderCheckoutForm;