import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h1>order confirmed</h1>
            <p>Order placed successfully, You can check order status successfully.</p>
            <Link to="/myorder">Check Status</Link>
        </main>
    </section>
    )
}

export default PaymentSuccess