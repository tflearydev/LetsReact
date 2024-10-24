import React from "react";

import { Card, Col, Row, Avatar } from "antd";
import { Container } from "react-bootstrap";
import Transmission from "../../assets/placeholders/recent4.png";
import Door from "../../assets/placeholders/recent5.png";
import Transmission2 from "../../assets/placeholders/recent6.png";
import Engine from "../../assets/placeholders/recent4.png";
import Hood from "../../assets/placeholders/recent5.png";
import Front from "../../assets/placeholders/recent6.png";
import "./RecentView.scss";

const { Meta } = Card;

function RecentView(props) {
  return (
    <section className={props.className}>
      <Container>
        <div className="recent-view-spacing">
          <span>{props.text}</span>

          <a href="#" className="see-all">
            See All
          </a>
        </div>

        <Row gutter={16}>
          <Col lg={4} xs={12} className='recent-overlay2'>

            <a href="#">
            <Card
              // hoverable
              // style={{ width: 240 }}
              
              cover={
                <img
                  alt="example"
                  src={Transmission}
                  className="recent-view-img"
                />
              }
            >

             
               <div class='img-overlay2'></div>
              FREIGHTLINER
              <Meta title="Detroit engine - DD5 - 1.5 Lt." />
              <div className="recent-price">$14,000</div>
          
              {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
            </Card>
            </a>
          </Col>

          <Col lg={4} xs={12} className='recent-overlay2'>

            <a href="#">
            <Card
              // hoverable
              //   style={{ width: 240 }}
             
              cover={
                <img alt="example" src={Door} className="recent-view-img" />
              }
            >
               <div class='img-overlay2'></div>
              FREIGHTLINER
              <Meta title="Detroit engine - DD5 - 1.5 Lt." />
              <div className="recent-price">$14,000</div>
              {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
            </Card>
            </a>
          </Col>

          <Col lg={4} xs={12} className='recent-overlay2'>

            <a href="#">
            <Card
              // hoverable
              //   style={{ width: 240 }}
            
              cover={
                <img
                  alt="example"
                  src={Transmission2}
                  className="recent-view-img"
                />
              }
            >
               <div class='img-overlay2'></div>
              FREIGHTLINER
              <Meta title="Detroit engine - DD5 - 1.5 Lt." />
              <div className="recent-price">$14,000</div>
              {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
            </Card>
            </a>
          </Col>

          <Col lg={4} xs={12} className='recent-overlay2'>

          <a href="#">
            <Card
              // hoverable
              //   style={{ width: 240 }}
              
              cover={
                <img alt="example" src={Engine} className="recent-view-img" />
              }
            >
               <div class='img-overlay2'></div>
              FREIGHTLINER
              <Meta title="Detroit engine - DD5 - 1.5 Lt." />
              <div className="recent-price">$14,000</div>
              {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
            </Card>
        </a>

          </Col>
          <Col lg={4} xs={12} className='recent-overlay2'>

            <a href="#">
            <Card
              // hoverable
              //   style={{ width: 240 }}
             
              cover={
                <img alt="example" src={Hood} className="recent-view-img" />
              }
            >
               <div class='img-overlay2'></div>
              FREIGHTLINER
              <Meta title="Detroit engine - DD5 - 1.5 Lt." />
              <div className="recent-price">$14,000</div>
              {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
            </Card>
            </a>


          </Col>
          <Col lg={4} xs={12} className='recent-overlay2'>
            
            <a href="#">
            <Card
              // hoverable
              //   style={{ width: 240 }}
            
              cover={
                <img alt="example" src={Front} className="recent-view-img" />
              }
            >
               <div class='img-overlay2'></div>
              FREIGHTLINER
              <Meta title="Detroit engine - DD5 - 1.5 Lt." />
              <div className="recent-price">$14,000</div>
              {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
            </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RecentView;
