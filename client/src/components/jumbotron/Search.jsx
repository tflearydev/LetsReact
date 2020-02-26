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
import {fetchMakesByCategoryId} from '../../api/makes-api';


//Reducers
import CategoriesReducer from '../../reducers/categories/CategoriesReducer';
import MakesReducer from '../../reducers/makes/MakesReducer';

//Drop Loader During API Calls
import WithLoadingDrop from "../WithLoadingDrop";
const WithLoadingDropCategories = WithLoadingDrop(Drop);
const WithLoadingDropMakes = WithLoadingDrop(Drop);


const orStyle = {
  marginTop: "-5px",
  marginBottom: "30px"
};


function Search() {
  //STATE MANAGEMENT
  const [categoriesState, dispatchCategories] = useReducer(CategoriesReducer,{
    isFetching: false,
    data: [],
    dataLoaded: false,
    selected_id: null

  });

  const [makesState, dispatchMakes] = useReducer(MakesReducer,{
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

  //FUNCTIONS AND EVENT HANDLERS - ONLOAD
  const runFetchCategories = async () => {
    const categories_data = await fetchCategories();  
    dispatchCategories({type: 'LOAD_DATA', payload: categories_data}); 
  }

  //FUNCTIONS AND EVENT HANDLERS - Categories onchange
  const runFetchMakesByCategoryId = async (category_id) => {
    const makes_data = await fetchMakesByCategoryId(category_id);  
    dispatchMakes({type: 'LOAD_DATA', payload: makes_data}); 
  }

  const onCategoriesChange = (e) =>{
      let value = e; 
      if(isNaN(value)){
        dispatchCategories({type: 'UPDATE_SELECTED_ID', payload: null}); 
        dispatchMakes({type: 'LOAD_DATA', payload: []});
        //dispatchModel({type: 'LOAD_DATA', payload: []});

      }else{
        dispatchCategories({type: 'UPDATE_SELECTED_ID', payload: value}); 
        dispatchMakes({type: 'IS_FETCHING', payload: true});
        runFetchMakesByCategoryId(value);   
      }
  }

  const onMakesChange = (e) =>{
    let value = e; 
    // if(isNaN(value)){
    //   dispatchCategories({type: 'UPDATE_SELECTED_ID', payload: null}); 
    //   dispatchMakes({type: 'LOAD_DATA', payload: []});
    //   //dispatchModel({type: 'LOAD_DATA', payload: []});

    // }else{
    //   dispatchCategories({type: 'UPDATE_SELECTED_ID', payload: value}); 
    //   dispatchMakes({type: 'IS_FETCHING', payload: true});
    //   runFetchMakesByCategoryId(value);   
    // }
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

                <hr style={orStyle}></hr>

                <Form.Group>
                  {/* Categories Dropdown */}
                  <WithLoadingDropCategories type="default" state = {categoriesState} onChange={onCategoriesChange} data={categoriesState.data} />
              

                  
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                  {/* Makes Dropdown */}
                  <WithLoadingDropMakes type="v2" state = {makesState} onChange={onMakesChange} data={makesState.data} />

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
