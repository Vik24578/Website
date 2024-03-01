import React from "react";
import PizzaLeft from "../assets/contactburger.jpg";
import "../styles/Contact.css";

function Contact() {

    const [submit, setSubmit] = React.useState(false)

  function sub() {
  
    setSubmit(true)
  }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" 
          
          required />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" required/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
            {submit && <p>Thanks for the message</p>}
          <button onClick={sub} type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
