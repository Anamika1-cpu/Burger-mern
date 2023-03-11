import React from 'react'
import {motion} from 'framer-motion'
const MenuCard = ({itemNum,title,price,handler,burgerSrc,delay}) => {
  return (
            <motion.div 
            initial={{
                x:"-100%",
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                delay
            }}
            className='menucard'>
                <div>
                    Item {itemNum}
                </div>  
                <main>
                    <img src={burgerSrc} alt={itemNum} />
                    <h5>₹{price}</h5>
                    <p>{title}</p>
                    <button onClick={()=>handler(itemNum)}>Buy Now</button>
                </main>
            </motion.div>    
  )
}

export default MenuCard