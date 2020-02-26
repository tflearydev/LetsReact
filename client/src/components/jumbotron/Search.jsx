import React, {useReducer, useEffect} from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
// import { Menu, Dropdown, Button, Icon, message  } from 'antd';
import "./Search.scss";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput
} from "shards-react";
import searchicon from "../../assets/searchicon.png";
import Drop from "./Drop";

//API
import {fetchCategories} from '../../api/categories-api';

//Reducers
import CategoriesReducer from '../../reducers/categories/CategoriesReducer';


const orStyle = {
 
  // marginBottom: "30px",
  // width: '40%',
  // left: '0',
  // position: 'relative'
  marginTop : '-4px',
  fontSize: '16px'
 
};


function Search() {
  //STATE MANAGEMENT
  const [categoriesState, dispatchCategories] = useReducer(CategoriesReducer,{
    isFetching: false,
    data: [],
    dataLoaded: false,
    selected_id: null

  });

  //Onload check state
  useEffect(() => {
    if(!categoriesState.dataLoaded){
      dispatchCategories({type: 'IS_FETCHING', payload: true});
      runFetchCategories();            
    }
  }, []);//pass in array what to look for to rerender

  //FUNCTIONS AND EVENT HANDLERS
  const runFetchCategories = async () => {
    const categories_data = await fetchCategories();  
    dispatchCategories({type: 'LOAD_DATA', payload: categories_data}); 
  }

  return (
    <Container>
      <Row className="mobile-search">
        <Col sm={12}>
          {/* <Form>
          <Form.Group> */}

          <InputGroup className="vin">
            <FormInput placeholder="Search by term" type="text" />
            <InputGroupAddon type="append" className="addon">
              <Button className="mobile-btn">Search</Button>
            </InputGroupAddon>
          </InputGroup>

          {/* </Form.Group>
            </Form> */}
        </Col>
      </Row>

      <Row>
        <Col lg={4} className="desktop-search">
          <Card className="search-card">
            <Card.Body>
              <Form>
                {/* <Card.Title className="text-center what">
                  What part are you looking for
                </Card.Title> */}

                <Form.Group>
                  <InputGroup className="vin">
                    <FormInput placeholder="Search by term " />
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

                {/* <hr style={orStyle} ></hr> */}

                <div class="separator"><span style={orStyle}>or</span></div>

                <Form.Group>
                  {/* <Form.Label>Manufacturer</Form.Label> */}

                  
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
                  {
                    !categoriesState.dataLoaded ?
                      (<p>Data Loading...</p>) :
                      <Drop state = {categoriesState} />
                      /*<Drop state = {} />*/
                  }

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
