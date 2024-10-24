import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Hamburger.scss";
import menu from "../../assets/newmenu.svg";

var styles = {
  bmBurgerButton: {
    position: "relative",
    width: "32px",
    height: "32px",

    float: "right",

    color: "white !important",
    backgroundColor: "transparent"
  },
  bmBurgerBars: {
    background: "#C4D0D9"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0px"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    height: "100vh",
    // width: '100vw',
    zIndex: "9999"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "block",
    zIndex: "9999"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: "999",
    width: "100vw",
    height: "100%",
    top: "0",
    left: "0"
    //   transform: 'translate3d(1%, 0px, 0px)'
  }
};

class Hamburger extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
        <Menu
          className="menu"
          styles={styles}
          customBurgerIcon={<img className="new-menu" src={menu} />}
          right
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>

          <a id="about" className="menu-item" href="/">
            About
          </a>
          <a id="contact" className="menu-item" href="/">
            Contact
          </a>
          <a id="contact" className="menu-item" href="/product">
            Product Page 
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </>
    );
  }
}

export default Hamburger;
