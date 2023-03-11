import React from 'react'
import {motion} from 'framer-motion';
import imgSrc from '../../assests/burger1.png'
const Contact = () => {
  return (
    <section className='contact'>
        <motion.form
          initial={{
            x:"-100%",
            opacity:0
          }}
          animate={{
            opacity:1,
            x:0
          }}
          transition={{
            delay:0.2
          }}
        >
            <h2>Contact form</h2>
            <input type="text" name="name" placeholder='Anamika Gour' />
            <input type="email" name="email" placeholder='a@gmail.com' />
            <textarea placeholder='message...' id="" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
        </motion.form>

        <motion.div className="formBorder"
        initial={{
          x:"100vw",
          opacity:0,
        }}
        animate={{
          x:0,
          opacity:1,
        }}
        
        transition={{
          delay:0.2
        }}
        >
            <motion.div initial={{
              y:"-100vh",
              x:"50%",
              opacity:0
            }}
            animate={{
              x:"50%",
              y:"-50%",
              opacity:1
            }}
            transition={{
              delay:1
            }}
            >
                <img src={imgSrc} alt="burger"/>
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Contact