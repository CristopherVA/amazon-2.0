import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { CheckoutProduct } from '../components/CheckoutProduct'
import { Header } from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripeProcess = loadStripe(process.env.stripe_public_key)

const checkout = () => {

    const { data: session } = useSession()
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)

    const createCheckoutSession = async () => {
        const stripe = await stripeProcess;

        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items: items,
            email: session.user.email
        })

        const result = await stripe.redirectToCheckout({ sessionId: checkoutSession.data.id})

        if (result.error) console.log(result.error.message)

    }

    return (
        <div>
            <Header />

            <main className='lg:flex max-w-screen-2xl m-auto'>
                {/* Left */}
                <div>
                    <Image
                        src='https://links.papareact.com/ikj'
                        width={1020}
                        height={254}
                        objectFit="contain"

                    />

                    <div className='flex flex-col p-5 space-y-10 bg-white '>
                        <h1 className='text-3xl border-b pb-4'>
                            {
                                items.length === 0 ? 'Your Amazon Basket is Empty' : 'Shopping Basket'
                            }
                        </h1>
                    </div>

                    <div>
                        {items.map(item => (
                            <CheckoutProduct key={item.id} {...item} />
                        ))}
                    </div>

                </div>
                {/* Rigth */}

                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {
                        items.length >= 0 ? (
                            <>
                                <h2 className='whitespace-nowrap'>Subtotal: ({items.length} items): {' '}
                                    <span className='font-bold'>
                                        <CurrencyFormat
                                            value={total}
                                            className='font-bold text-xl mt-2'
                                            disabled={true} />
                                    </span>
                                </h2>

                                <button
                                    role='link'
                                    onClick={createCheckoutSession}
                                    disabled={!session}
                                    className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-300 text-gray-300 cursor-not-allowed'}`}
                                >{!session ? 'Sign In to checkout' : 'Proceed to pay'}</button>
                            </>
                        ) : null
                    }
                </div>

            </main>
        </div>
    )
}
export default checkout