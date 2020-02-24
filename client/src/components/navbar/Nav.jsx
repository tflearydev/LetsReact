import React from "react";
import Hamburger from "./Hamburger";
import "./Nav.scss";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import menu from "../../menu.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.svg";
// import Language from "./Language";
import { Container, Navbar, Nav } from "react-bootstrap";

function appNav() {
  return (
    <>

    <Router>
      <nav className="outerNav">
        <Container>

          <Navbar.Brand href='/'>
          <div className="circle"></div>

          <span className="title">GENERATION PARTS</span>
          </Navbar.Brand>

          {/* <img src={menu} alt=""></img> */}

          <Nav className="nice">
            

        
            <a href='/sell'>
              <span className="sell">Start selling</span>
            </a>

            <a href='/'>
            <img src={cart} alt="" className="cart"></img>
            </a>


            <Hamburger />

            {/* <Language /> */}
          </Nav>
        </Container>
      </nav>

      </Router>
    </>
  );
}

export default appNav;
