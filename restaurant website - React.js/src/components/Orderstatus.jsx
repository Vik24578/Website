import React from "react"

import "../styles/Orderstatus.css"


function OrderStatus({name,image, price, setTrigger, trigger}) {

    const [ quantity, setQuantity] = React.useState(1)

    function add() {
        setQuantity(preVal => preVal+ 1)
    }
    function minus() {
        setQuantity(prevVal => prevVal -1)
    }

    React.useEffect(()=> setQuantity(1),[trigger])
        
            
    

   return( (trigger) ? 
   <div>
   <div className="bg-image"></div>
   <div className="order-box"><div className="success-box">
    <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    <span className="text">{`You ordered ${name} for $${(price * quantity).toFixed(2)}`}</span>
   <div className="button-container"> <button onClick={minus} className="minuss">-</button>
    <span className="count">{ (quantity === 0) ? setTrigger(false) : quantity}</span>
     <button onClick={add} className="qtn-btn">+</button> </div>
   <button className="close-button" onClick={()=>setTrigger(false)}>
     X
   </button>
 </div> 
 </div>  
 </div>
  : ""
);
}

export default OrderStatus