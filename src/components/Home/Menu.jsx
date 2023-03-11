import React from 'react'
import MenuCard from './MenuCard'
import img1 from '../../assests/burger1.png'
import img2 from '../../assests/burger2.png'
import img3 from '../../assests/burger3.png'
const Menu = () => {
    const addToCartHandler = (itemNum) =>{
        
    }
  return (
    <section id="menu">
        <h1>MENU</h1>
        <div>
            <MenuCard itemNum={1} 
            title="Cheese Burger"
            price={200}
            handler={addToCartHandler}
            delay={0}
            burgerSrc={img1}/>
            <MenuCard itemNum={2} 
            title="Cheese Burger"
            price={200}
            handler={addToCartHandler}
            delay={0.2}
            burgerSrc={img2}/>
            <MenuCard itemNum={3} 
            title="Cheese Burger"
            price={200}
            handler={addToCartHandler}
            delay={0.4}
            burgerSrc={img3}/>
        </div>
    </section>
  )
}

export default Menu