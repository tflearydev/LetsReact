import React from "react";
import Hamburger from "./Hamburger";
import "./Nav.scss";
// import menu from "../../menu.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.svg"
// import Language from "./Language";
import { Container } from 'react-bootstrap';






function Navbar() {
  return (
    <>

    
      <nav className="outerNav">

      <Container>

        <div className="circle"></div>

        <span className="title">GENERATION PARTS</span>

        {/* <img src={menu} alt=""></img> */}



<div className="nice">
        <Hamburger />

        <img src={cart} alt="" className="cart"></img>

        <a><span className="sell">Start selling</span></a>

        {/* <Language /> */}
        </div>


       

    

        

        
        </Container>
     
      </nav>
      
      
    </>
  );
}

export default Navbar;
