import React from 'react'

const confirmOrder = () => {
  return (
    <section className='confirmorder'>
        <main>
            <h1>Confirm order</h1>
            
            <form >
                <div>
                    <label>Cash On Delivery</label>
                    <input type="radio" name="payment" id="" />
                </div>
                <div>
                    <label>Online</label>
                    <input type="radio" name="payment" id="" />
                </div>
                <button type="submit">Place Order</button>
            </form>
                
        </main>
    </section>
    )
}

export default confirmOrder