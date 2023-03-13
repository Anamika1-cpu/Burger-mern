import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillEye} from 'react-icons/ai'
const MyOrders = () => {
    const arr=[1,2,3,4,5];
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((i)=>(
                        <tr key={i}>
                        <td>#13587456139</td>
                        <td>Processing</td>
                        <td>23</td>
                        <td>1</td>
                        <td>₹{4500}</td>
                        <td>COD</td>
                        <td>
                            <Link to={`/order/${"sbhkf"}`}>
                                <AiFillEye/>
                            </Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default MyOrders