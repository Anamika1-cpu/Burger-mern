import React from 'react'
import img1 from '../../assests/burger1.png'
import img2 from '../../assests/burger2.png'
import img3 from '../../assests/burger3.png'
import {Link} from "react-router-dom"
import Footer from ".././layout/Footer"
const CartItem = ({value,img,title,increment,decrement}) =>(
    <div className="cartItem">
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item"  />
        </div>
        <div>
            <button onClick={decrement}>-</button>
            <input type="Number" value={value}/>
            <button onClick={increment}>+</button>
        </div>
    </div>
)

const Cart = () => {
    const increment = (Item)=>{}
    const decrement = (Item)=>{}
  return (
    <section className='cart'>
        <main>
            <CartItem title={"Cheese Burger"} 
                    img={img1}
                    value={0}
                    decrement={()=>decrement(1)}
                    increment={()=>increment(1)}
            />
            <CartItem title={"Cheese Burger"} 
                    img={img2}
                    value={0}
                    decrement={()=>decrement(2)}
                    increment={()=>increment(2)}
            />
            <CartItem title={"Cheese Burger"} 
                    img={img3}
                    value={0}
                    decrement={()=>decrement(3)}
                    increment={()=>increment(3)}
            />
            <article>
                    <h4>Sub Total</h4>
                    <p>₹{2000}</p>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{2000*0.18}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹{20}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>₹{2000*0.18 + 2000 + 20}</p>
                    </div>
                <Link to='/shipping'>Checkout</Link>
            </article>
        </main>
        <Footer/>
    </section>
    )
}

export default Cart