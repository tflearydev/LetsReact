import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SellerAccordion.scss";
import seller from "../../assets/seller.png";
import PlusMinus from "./PlusMinus";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// const Panel = Collapse.Panel;

function SellerAccordion() {
  return (
    <Container className="seller-accordion">
      <Row>
        <Col lg={6} className="more-posts-column">
          <div className="more-posts">More posts = More profits!</div>
          <Button className="create-btn" variant="primary">
            Create new post
          </Button>

          <div>
            <PlusMinus />
          </div>
        </Col>

        <Col lg={6}>
          <img src={seller} alt="" className="seller-pic"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default SellerAccordion;
