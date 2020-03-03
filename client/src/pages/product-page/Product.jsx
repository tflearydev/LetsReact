import React from "react";
import "./Product.scss";
import Nav from "../../components/navbar/Nav";
import { Container, Button } from "react-bootstrap";
import { Row, Col, Input } from "antd";
import Carousel from "../../components/carousel/Carousel";
import MoreTags from "../../components/more-tags/MoreTags";
import RecentView from "../../components/parts/RecentView";
import Email from "../../components/home-email/Email";
import Footer from "../../components/footer/Footer"

// const detroit = {
//     fontSize: '43px',
//     fontWeight: '600',
//     color: '#202B31'

// }

function Product() {
  return (
    // <div className={props.className}>Hello</div>

    <>
      <Nav className="outer-nav-product" />




      <Container>
        <Row className="thumbnail" gutter={35}>
          <Col lg={14}>
            <Carousel />
          </Col>

          <Col lg={10} className="second-column">
            <div className="detroit">
              Detroit engine painted white - DD5 - 1.5 Lt.
            </div>

            <Row>
              <div className="tags">Repainted</div>

              <div className="tags">New bearings</div>

              <div className="tags">Oil treated</div>
              

              {/* more can be added below */}
            </Row>

            <div className="specs">
              <Row className="spec-row">
                <Col lg={12} className="spec-title">
                  Make
                </Col>

                <Col lg={12} style={{ textAlign: "right" }}>
                  hello
                </Col>
              </Row>

              <Row className="spec-row">
                <Col lg={12} className="spec-title">
                  Make
                </Col>

                <Col lg={12} style={{ textAlign: "right" }}>
                  hello
                </Col>
              </Row>

              <Row className="spec-row">
                <Col lg={12} className="spec-title">
                  Make
                </Col>

                <Col lg={12} style={{ textAlign: "right" }}>
                  hello
                </Col>
              </Row>

              <Row className="spec-row">
                <Col lg={12} className="spec-title">
                  Make
                </Col>

                <Col lg={12} style={{ textAlign: "right" }}>
                  hello
                </Col>
              </Row>

              <Row className="spec-row">
                <Col lg={12} className="spec-title">
                  Make
                </Col>

                <Col lg={12} style={{ textAlign: "right" }}>
                  hello
                </Col>
              </Row>

              <Row className="spec-row">
                <Col lg={12} className="spec-title">
                  Make
                </Col>

                <Col lg={12} style={{ textAlign: "right" }}>
                  hello
                </Col>
              </Row>
            </div>

            <div
              style={{ marginTop: "10px", fontSize: "16px", color: "#9D9C9A" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <Row style={{ marginTop: '8px', fontWeight: '600', color: '#202B31', fontSize: '16px'}} >
              <Col lg={12}>
                  Quantity <span>
                  <Input defaultValue="1" style={{ width: '43px', height: '30px', fontWeight: 'bold', color: '#202B31', fontSize: '16px'}} />
                      </span>
              </Col>

              <Col lg={12}>

                  <div style={{lineHeight: '2', textAlign: 'right', fontWeight: '600', color: '#202B31', fontSize: '16px'}}>2 Available</div>
              </Col>
            </Row>




            <Row style={{ marginTop: '25px'}}>
              <Col lg={12}>
                  <span style={{fontSize: '40px', color: '#408FC6', fontWeight: '600', lineHeight: '1'}}>$16,500</span>
              </Col>

              <Col lg={12}>
                  <Button style={{ float: 'right', backgroundColor: '#408FC6', color: 'white', borderColor: '#408FC6', width: '100%', height: '40px'}}>
                      <span style={{ fontWeight: '600'}}>Add to cart</span>
                      </Button>
              </Col>
            </Row>





          </Col>





        </Row>

        </Container>





        <RecentView className='similar-view' text='Similar items' />


        <MoreTags />

        <RecentView className='recent-view-product' text='Recently Viewed' />

        <Email className="email-style3" />


        <Footer className="foot-style3" />











     












    </>
  );
}

export default Product;
