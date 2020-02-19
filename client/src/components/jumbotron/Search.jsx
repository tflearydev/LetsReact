import React from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
// import { Menu, Dropdown, Button, Icon, message  } from 'antd';
import "./Search.scss";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput
} from "shards-react";
import searchicon from "../../searchicon.png";
import Drop from "./Drop";

const orStyle = {
  marginTop: "-5px",
  marginBottom: "30px"
};

function Search() {
  return (
    <Container>
      <Row className="">
        <Col lg={4}>
          
          <Card className="search-card">
            <Card.Body>
              <Form>
                {/* <Card.Title className="text-center what">
                  What part are you looking for
                </Card.Title> */}

                

                <Form.Group>
                  <InputGroup className="vin">
                    <FormInput placeholder="Search by term or VIN" />
                    <InputGroupAddon type="append" className="addon">
                      <InputGroupText>
                        <img
                          src={searchicon}
                          alt="search icon"
                          className="searchicon"
                        ></img>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Form.Group>



                <hr style={orStyle}></hr>

                <Form.Group>
                  {/* <Form.Label>Manufacturer</Form.Label> */}

                  <Drop />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                  {/* <Form.Label>Model</Form.Label>
                    <Form.Control as="select">
                      <option>Any</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control> */}
                  <Drop />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                  {/* <Form.Label>Model</Form.Label>
                    <Form.Control as="select">
                      <option>Any</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control> */}
                  <Drop />
                </Form.Group>
              </Form>

              {/* <div className="text-center">
                <Button
                  gradient="aqua"
                  //   rounded
                  size="sm"
                  type="submit"
                  className="text-center search-button"
                >
                  Search
                </Button>
              </div> */}
            </Card.Body>
          </Card>

          <div className="text-center search-btn">
                <Button
                  // gradient="aqua"
                  //   rounded
                  size="sm"
                  type="submit"
                  className="text-center search-button"
                >
                  Search
                </Button>
              </div>

          
        </Col>

        <Col lg={8}>
          <span className="welcome">
            THE PARTS YOU NEED<br></br>
            WHEN YOU NEED THEM
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
