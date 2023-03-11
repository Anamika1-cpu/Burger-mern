import React from 'react'
import {motion} from 'framer-motion'
import me from '../../assests/meriphoto2.jpg'
const Founder = () => {
  const options={
    initial:{x:"-100%",
    opacity:0
},
whileInView:{x:"0",
opacity:1
}}
  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="founder" height={200} width={200} />
            <h3>Anamika Gour</h3>
            <p>Hey, I am Anamika Gour, founder of Burger Bounce</p><br />            
        </motion.div>
    </section>
  )
}

export default Founder