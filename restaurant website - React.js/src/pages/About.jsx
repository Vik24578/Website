import React from "react";
import MultiplePizzas from "../assets/hamburger1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>

       <span className="start-text">Welcome to Wiktor's Burger, where passion for perfection meets the art of crafting mouthwatering burgers. Nestled in the heart of internet, our restaurant is a haven for burger aficionados, offering a diverse menu that caters to every taste bud. From classic beef patties to innovative gourmet creations, each burger at Wiktor's is a culinary masterpiece designed to tantalize your senses and leave you craving for more.</span> 

<h2>Our Story:</h2>
At Wiktor's Burger, our story is one of dedication and culinary ingenuity. Founded by the visionary chef, Wiktor, our restaurant was born out of a lifelong love affair with burgers and a commitment to delivering unparalleled dining experiences. Drawing inspiration from global culinary traditions and local flavors, Wiktor and his team of passionate chefs have curated a menu that showcases the very best of burger craftsmanship, ensuring that every bite tells a story of flavor, quality, and creativity.
<br />
<br />
<h2>Our Menu:</h2>
Prepare to embark on a culinary journey like no other as you explore the tantalizing offerings on our menu. From our signature Wiktor's Classic Burger, featuring juicy Angus beef topped with melted cheese and crisp lettuce, to our exotic Hawaiian Luau Burger, adorned with grilled pineapple and tangy teriyaki sauce, there's something to delight every palate. For those craving plant-based options, our selection of vegan burgers promises a symphony of flavors and textures that rival their meaty counterparts.
<br />
<br />
<h2>Our Commitment to Quality:</h2>
At Wiktor's Burger, quality is not just a promise; it's our way of life. We meticulously source the freshest ingredients, partnering with local farmers and artisans to ensure that every component of our burgers meets the highest standards of excellence. From hand-selected beef cuts to artisanal buns baked fresh daily, each element is thoughtfully chosen to elevate your dining experience and deliver the ultimate satisfaction with every bite.
<br />
<br />
<h2>The Wiktor's Burger Experience:</h2>
Step into the inviting ambiance of Wiktor's Burger and let the aroma of sizzling patties and savory spices whisk you away on a culinary adventure. Whether you're dining with friends, enjoying a family meal, or treating yourself to a solo indulgence, our warm and welcoming atmosphere sets the stage for unforgettable moments shared over great food and laughter. At Wiktor's, every visit is an opportunity to create lasting memories and discover new favorites.
<br />
<br />
<h2>Visit Us Today:</h2>
Join us at Wiktor's Burger and experience the magic of gourmet burgers done right. With our unwavering commitment to quality, innovation, and hospitality, we invite you to indulge your senses and savor the flavor of perfection with every bite. From our kitchen to your table, let Wiktor's Burger be your destination for burger bliss and culinary excellence.
        </p>
      </div>
    </div>
  );
}

export default About;
