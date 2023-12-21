import {useEffect, useState} from 'react'
import '../App.css'

function CartList({cart, setCart}) {

  const [CART, setCART] = useState([])

  useEffect(() =>{
    setCART(cart)
  },[cart])

  const removeFromCart = (cartIndex) => {
    const updatedCart = CART.filter((item, index) => index !== cartIndex);
    setCART(updatedCart);
    setCart(updatedCart); // Update the parent state (if needed)
  };


  return (
    <div className='cart-list'>
      {
        CART?.map((cartItem, cartIndex) =>{
          return (
            <div key={cartIndex}>
              <img src={cartItem.url} alt='cartItem' width={150} />
              <span>{cartItem.name}</span>
              <button onClick={()=>{
                  const _CART =CART.map((item, index)=>{
                  return cartIndex === index ? {...item, quantity: item.quantity>0 ? item.quantity-1: 0 } : item
                });
                
                if (_CART[cartIndex].quantity === 0) {
                  removeFromCart(cartIndex);
                } else {
                  setCART(_CART);
                  setCart(_CART); // Update the parent state (if needed)
                }
              }}>-</button>
              <span>{cartItem.quantity}</span>
              <button 
                onClick={()=>{
                  const _CART =CART.map((item, index)=>{
                  return cartIndex === index ? {...item, quantity: item.quantity+1} : item
                })
                setCART(_CART)
              }}>+</button>
              <span>Rs. {cartItem.price * cartItem.quantity}</span>
            </div>
          )
        })
      }

      <p> Total Amount: Rs.
        {
          CART.map(item=> item.price*item.quantity).reduce((total,value) => total +value ,0)
        }
      </p>

    </div>
  )
}

export default CartList