import React from "react";
import OrderStatus from "./Orderstatus";

function MenuItem({ image, name, price }) {

  const [buttonPopup, setButtonPopup] = React.useState(false)
function makeOrder() {

}

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <button className="order-btn" onClick={()=>setButtonPopup(true)} > Order </button>
      <OrderStatus image ={image}name={name} price={price} trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>
  );
}

export default MenuItem;
