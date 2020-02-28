import React from "react";
import Hamburger from "./Hamburger";
import "./Nav.scss";
import {
  BrowserRouter, Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
// import menu from "../../menu.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.svg";
// import Language from "./Language";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "./BuySellButton";




function appNav(props) {

  const WrappedButton = withRouter(Button);


  return (
    <>
      
        <nav className={props.className}>
          <Container>
            <Navbar.Brand href="/">
              <div className="circle"></div>

              <span className="title">GENERATION PARTS</span>
            </Navbar.Brand>

            {/* <img src={menu} alt=""></img> */}

            <Nav className="nice">


              
                <WrappedButton />
       

             

              {/* <Link to="/">
                <WrappedButton />
              </Link> */}

              {/*         
            <a href='/sell'>
              <span className="sell">Start selling</span>
            </a> */}

              <a href="/">
                <img src={cart} alt="" className="cart"></img>
              </a>

              <Hamburger />

              {/* <Language /> */}
            </Nav>
          </Container>
        </nav>
     
    </>
  );
}

export default appNav;
