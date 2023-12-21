import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
function App() {

  const [product, setProduct] = useState([
    {
      url:'https://cdn.create.vista.com/downloads/94ece160-927c-460f-84cf-d8a2961be91c_1024.jpeg',
      name:'Business Webinar',
      description:'Description: This is webinar about...',
      price: 1499
    },
    {
      url:'https://img.freepik.com/premium-psd/business-live-webinar-corporate-social-media-post-template_447661-385.jpg',
      name:'Webinar on Creative marketing Agency',
      description:'Description: This is webinar about...',
      price: 999
    },
    {
      url:'https://img.freepik.com/free-psd/digital-marketing-corporate-social-media-live-webinar-post-template_237398-262.jpg',
      name:'Webinar on Online Creative Business Idea',
      description:'Description: This is webinar about...',
      price: 499
    },
    {
      url:'https://img.freepik.com/premium-psd/modern-live-webinar-flyer-social-media-post-template-banner_497997-684.jpg?w=2000',
      name:'Business Talk Show',
      description:'Description: This is webinar about...',
      price: 1499
    },
    {
      url:'https://img.freepik.com/premium-psd/training-session-square-flyer-instagram-social-media-post-template_225558-285.jpg?size=626&ext=jpg',
      name:'E-Commerce Business Training',
      description:'Description: This is webinar about...',
      price: 799
    },
    {
      url:'https://i.pinimg.com/736x/4d/22/b7/4d22b7edddcab5d2052203ead515c03c.jpg',
      name:'Online Training Season',
      description:'Description: This is webinar about...',
      price: 999
    },
  ])

  const [cart, setCart] =useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart =(data) =>{
    setCart([...cart, {...data, quantity: 1}])
  }

  const handleShow =(value) =>{
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow}></Header>
      {
        showCart ?
        <CartList cart={cart} setCart={setCart}></CartList> :
        <ProductList product={product} addToCart={addToCart}></ProductList>
      }
      
    </div>
    
  );
}

export default App;
