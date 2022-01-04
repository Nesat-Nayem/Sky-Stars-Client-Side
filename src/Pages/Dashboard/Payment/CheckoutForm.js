import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button, Typography } from '@mui/material';

const CheckoutForm = ({ payment }) => {
    const { price, name, _id } = payment
    const stripe = useStripe()
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const { user } = useAuth()

    // useEffect(() => {
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(res => res.json())
    //         .then(data => setClientSecret(data.clientSecret))

    // }, [price])




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }
        // setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log(error)
            setError(error.message);
            setSuccess('')
        }
        // else {
        //     setError('')
        //     console.log(paymentMethod);
        // }

        // // payment intent 
        // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 name: name,
        //                 email: user.email
        //             },
        //         },
        //     },
        // );
        // if (intentError) {
        //     setError(intentError.massage)
        // }
        // else {
        //     setSuccess("Your payment Successfully")
        //     setError('')
        //     console.log(paymentIntent);
        //     setProcessing(false)

        //     // save user 
        //     const payment = {
        //         amount: paymentIntent.amount,
        //         transaction: paymentIntent.client_secret.slice('_secret')[0],
        //         last4: paymentMethod.card.last4,
        //         action: paymentIntent.status
        //     }
        //     const url = `http://localhost:5000/allOrders/${_id}`
        //     fetch(url, {
        //         method: "POST",
        //         headers: {
        //             "content-type": "application/json"
        //         },
        //         body: JSON.stringify(payment)
        //     })
        //         .then(res => res.json())
        //         .then(data => console.log(data))
        // }

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
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
                <Button type="submit" disabled={!stripe}>
                    Pay
                </Button>
            </form>

            {
                error && <Typography variant='h6' style={{color:"red"}}>{error}</Typography>
            }
        </div>
    );
};

export default CheckoutForm;