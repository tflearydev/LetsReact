import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.scss";

// const footStyle = {
//   position: "relative",
//   top: "566px"
// };

// const footHead = {
//   fontWeight: "700",
//   fontSize: "20px",
//   color: "#202B31",
//   marginTop: "31px",
//   marginBottom: "31px"
// };

const footSpace = {
  paddingRight: "0px",
  paddingLeft: "60px"
};

const linkStyles = {
  fontSize: "16px",
  color: "#858585"
};

const linkDiv = {
  marginBottom: "15px"
};

const copyright = {
  // paddingLeft: '3.5vw',
  marginTop: "35px",
  marginBottom: "68px",
  fontSize: "16px",
  paddingLeft: "60px"
};

function Footer(props) {
  return (
    <footer className={props.className}>
      <Container className="foot-cont">
        <Row style={footSpace} className="footspace">
          <Col lg={3} xs={6} className="desk-footer">
            <a href="#">
              <div className='foot-title'>Buy</div>
            </a>

            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Registration</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Money back guarantee</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Locations</div>
            </a>
          </Col>

          <Col lg={3} xs={6}>
            <a href="#">
              <div className='foot-title'>Sell</div>
            </a>

            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Start Selling</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>How to sell</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Affiliates</div>
            </a>
          </Col>

          <Col lg={3} xs={6}>
            <a href="#">
              <div className='foot-title'>Stay Connected</div>
            </a>

            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Generation Part's Blog</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Facebook</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Instagram</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Twitter</div>
            </a>
          </Col>

          <Col lg={3} xs={6}>
            <a href="#">
              <div className='foot-title'>About</div>
            </a>

            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Company Info</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Info</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Diversity & Inclusion</div>
            </a>
            <a href="#" style={linkStyles}>
              <div style={linkDiv}>Careers</div>
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div style={copyright} className="copyright">
              Copyright 2020 Generation Parts All Rights Reserved.{" "}
              <span className="cookies">
                Accessibility, User Agreement, Privacy, Cookies,
              </span>{" "}
              and <span className="cookies">AdChoice</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
