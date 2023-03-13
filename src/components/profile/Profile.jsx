import React from 'react'
import me from '../../assests/meriphoto2.jpg'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import{TfiDashboard} from 'react-icons/tfi'
const Profile = () => {
    const options={
        initial:{
            y:'-100%',
            opacity:0
        },
        animate:{
            y:0,
            opacity:1
        }
    }
  return (
    <section className='profile'>
        <main>
            <motion.img src={me} alt="user" {...options} />
            <motion.h5 {...options} transition={{delay:0.3}}>
                Anamika
            </motion.h5>
            <motion.div 
            initial={{
                x:'-100vw',
                opacity:0
            }}
            animate={{
                x:0,
                opacity:1
            }}
            transition={{delay:0.3}}>
                <Link to='/admin/dashboard' style={{
                    borderRadius:0,
                    backgroundColor:"rgb(40,40,40)"
                }}>
                    Dashboard
                    <TfiDashboard/>
                </Link>
            </motion.div>
            <motion.div 
            initial={{
                x:'-100vw',
                opacity:0
            }}
            animate={{
                x:0,
                opacity:1
            }}
            transition={{delay:0.3}}>
                <Link to='/myorders' >
                    Orders
                </Link>
            </motion.div>
            <motion.button initial={{
                x:'-100vw',
                opacity:0
            }}
            animate={{
                x:0,
                opacity:1
            }}
            transition={{delay:0.3}}>
                Logout
            </motion.button>
        </main>
    </section>
  )
}

export default Profile
