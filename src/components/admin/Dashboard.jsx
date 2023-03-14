import React from 'react'
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJs, Tooltip, ArcElement, Legend} from 'chart.js';
import Loader from '../layout/Loader';

ChartJs.register(Tooltip, ArcElement, Legend);
const loading = true;
const Box = ({title,value})=>(
    <div>
        <h3>{title === "Income" && "₹"}
        {value}
        </h3>
        <p>{title}</p>
    </div>

)
const Dashboard = () => {
    const data = {
        labels: ["Preparing","Shipping","Delivered"],
        datasets: [
          {
            label: '# of Orders',
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
          },
        ],
    }
  return (
    <section className='dashboard'>
        {loading === false ? (
            <main>
            <article>
                <Box title={"Users"} value={"5687"}/>
                <Box title={"Users"} value={"5687"}/>
                <Box title={"Users"} value={"5687"}/>
            </article>
            <section>
                <div>
                    <Link to="/admin/orders">View Orders</Link>
                    <Link to="/admin/users">View Users</Link>
                </div>
                <aside>
                    <Doughnut data={data}/>
                </aside>
            </section>
        </main>
        ) : (<Loader/>)}
        
    </section>
  )
}

export default Dashboard