import React, {useState, useEffect} from "react";

import { Card, Col, Row, Avatar } from "antd";
import { Container } from "react-bootstrap";
import Hood from "../../assets/placeholders/recent1.png";
import Door from "../../assets/placeholders/recent2.png";
import Engine from "../../assets/placeholders/recent3.png";
import "./RecentAdd.scss";

//API
import {fetchRecentParts} from '../../api/parts-api';
const { Meta } = Card;

var topRecent = {
  top: "561px",
  position: "relative",
  zIndex: "1"
};

function RecentAdd(props) {
  const lg = props.lg;
  const xs = props.xs;
  const items_count = props.items_count;
  const row_count = props.row_count;
  const total_items = items_count * row_count;

  const [RecentAddState, SetRecentAdd] = useState({
    isFetching: false,
    data: [],
    dataLoaded: false,
    total_items: total_items

  });

  //Onload check state
  useEffect(() => {
    if(!RecentAddState.dataLoaded){
      runFetchRecentParts();            
    }
  }, []);//pass in array what to look for to rerender

  const runFetchRecentParts = async() => {
    const response = await fetchRecentParts(RecentAddState.total_items);  
    SetRecentAdd({
      isFetching: false,
      data: response,
      dataLoaded: true,
    })  
  }


  return (
      <>
      {
        !RecentAddState.dataLoaded  ? 

        (<section style={topRecent} className="top-recent"><Container className="top-recent"><Row gutter={16}>
            <Col lg={8} xs={24} className="recent-add-space recent-overlay">
            <Card><p className="recent-add-space recent-overlay">Loading Data...</p></Card>
            </Col>
          </Row></Container></section>
        ):
        (<section style={topRecent} className="top-recent">
          <Container>
            <div className="recent-add-spacing">
              <span>Recently added</span>
    
              <a href="#" className="see-all">
                See All
              </a>
            </div>
    
            <Row gutter={16}>
              {
                RecentAddState.data.map(obj => (
                    <Col key={obj.id} lg={lg} xs={xs} className="recent-add-space recent-overlay">
                      <a href="#">
                        <Card
                          // hoverable
                          // style={{ width: 240 }}
          
                          cover={<img alt="example" src={obj.image} className="recent-img" />}
                        >
                          <div className="img-overlay"></div>
                          {obj.name}
                          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
                <div className="recent-price">${obj.price}</div>
                          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
                        </Card>
                      </a>
                    </Col>
                ))
              }
              
    
              
              
          </Row>
        </Container>
      </section>)
    }
  
    </>)
  }
    
 


export default RecentAdd;
