import React, { useState } from "react";

import { Card, Col, Row, Avatar } from "antd";
import { Container } from "react-bootstrap";
import Hood from "../../assets/placeholders/recent1.png";
import Door from "../../assets/placeholders/recent2.png";
import Engine from "../../assets/placeholders/recent3.png";
import "./RecentAdd.scss";

const { Meta } = Card;

// var topRecent = {
//   top: "561px",
//   position: "relative",
//   zIndex: "1"
// };

function RecentAdd(props) {
  // const [size] = useState(props.size);

  // const items_per_row = props.items_per_row;
  // const item_rows = props.item_rows;

  return (
    <section className={props.className}>
      <Container>
        <div className="recent-add-spacing">
          <span>Recently posted</span>

          <a href="#" className="see-all">
            See All
          </a>
        </div>

        <Row gutter={16}>




          <Col
            lg={props.lg}
            xs={props.xs}
            className="recent-add-space recent-overlay"
          >
            <a href="#">
              <Card
                // hoverable
                // style={{ width: 240 }}

                cover={<img alt="example" src={Hood} className="recent-img2" />}
              >
                <div className="img-overlay"></div>
                FREIGHTLINER
                <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">$14,000</div>
                {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
              </Card>
            </a>
          </Col>







          

          <Col
            lg={props.lg}
            xs={props.xs}
            className="recent-add-space recent-overlay"
          >
            <a href="#">
              <Card
                // hoverable
                //   style={{ width: 240 }}

                cover={<img alt="example" src={Door} className={"recent-img2"} />}
              >
                <div className="img-overlay"></div>
                FREIGHTLINER
                <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">$14,000</div>
                {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
              </Card>
            </a>
          </Col>

          <Col
            lg={props.lg}
            xs={props.xs}
            className=" recent-add-space recent-overlay"
          >
            <a href="#">
              <Card
                // hoverable
                //   style={{ width: 240 }}

                cover={
                  <img alt="example" src={Engine} className="recent-img2"  />
                }
              >
                <div className="img-overlay"></div>
                FREIGHTLINER
                <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">$14,000</div>
                {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
              </Card>



            </a>
          </Col>











          <Col
            lg={props.lg}
            xs={props.xs}
            className="recent-add-space recent-overlay visual-only"
          >
            <a href="#">
              <Card
                // hoverable
                // style={{ width: 240 }}

                cover={<img alt="example" src={Hood} className="recent-img2" />}
              >
                <div className="img-overlay"></div>
                FREIGHTLINER
                <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">$14,000</div>
                {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
              </Card>
            </a>
          </Col>







          

          <Col
            lg={props.lg}
            xs={props.xs}
            className="recent-add-space recent-overlay visual-only"
          >
            <a href="#">
              <Card
                // hoverable
                //   style={{ width: 240 }}

                cover={<img alt="example" src={Door} className={"recent-img2"} />}
              >
                <div className="img-overlay"></div>
                FREIGHTLINER
                <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">$14,000</div>
                {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
              </Card>
            </a>
          </Col>

          <Col
            lg={props.lg}
            xs={props.xs}
            className=" recent-add-space recent-overlay visual-only"
          >
            <a href="#">
              <Card
                // hoverable
                //   style={{ width: 240 }}

                cover={
                  <img alt="example" src={Engine} className="recent-img2"  />
                }
              >
                <div className="img-overlay"></div>
                FREIGHTLINER
                <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">$14,000</div>
                {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
              </Card>



            </a>
          </Col>

          <Col
            lg={props.lg}
            xs={props.xs}
            className="recent-add-space recent-overlay visual-only"
          >
            <a href="#">
              <Card
                // hoverable
                // style={{ width: 240 }}

                cover={<img alt="example" src={Hood} className="recent-img2" />}
              >
                <div className="img-overlay"></div>
                FREIGHTLINER
                <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">$14,000</div>
                {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
              </Card>
            </a>
          </Col>







          

          <Col
            lg={props.lg}
            xs={props.xs}
            className="recent-add-space recent-overlay visual-only"
            
          >
            <a href="#">
              <Card
                // hoverable
                //   style={{ width: 240 }}

                cover={<img alt="example" src={Door} className={"recent-img2"} />}
              >
                <div className="img-overlay"></div>
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

export default RecentAdd;
