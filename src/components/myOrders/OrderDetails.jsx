import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {
                        "203-B, Indrapuri"
                    }
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {
                        "Anamika Gour"
                    }
                </p>
                <p>
                    <b>Phone</b>
                    {
                        6232583270
                    }
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {
                        "Processing"
                    }
                </p>
                <p>
                    <b>Placed At</b>
                    {
                        "23.4.26"
                    }
                </p>
                <p>
                    <b>Delivered At</b>
                    {
                        "23.4.26"
                    }
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment reference</b>#
                    {"hsadfuiyg"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"23.4.26"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Itms Total </b>
                    ₹{2345}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    ₹{40}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{45}
                </p>
                <p>
                    <b>Total</b>
                    ₹{2345+45+40}
                </p>
            </div>
            <article>
                <h1>Ordered items</h1>
                <div>
                <h4>Cheese Burger</h4>
                <div>
                    <span>{12}</span> X <span>{232}</span>
                </div>
                </div>
                <div>
                <h4>Cheese Burger</h4>
                <div>
                    <span>{12}</span> X <span>{232}</span>
                </div>
                </div>
                <div>
                <h4 style={{
                    fontWeight:'800'
                }}>Sub Total</h4>
                <div style={{
                    fontWeight:'800'
                }}>
                    ₹{527}
                </div>
                </div>
            </article>
        </main>
        </section>
  )
}

export default OrderDetails