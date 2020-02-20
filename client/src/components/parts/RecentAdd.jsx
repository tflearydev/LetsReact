import React from 'react';

import { Card, Col, Row, Avatar } from 'antd';
import { Container } from 'react-bootstrap';
import  Hood  from '../../assets/placeholders/recent1.png';
import  Door  from '../../assets/placeholders/recent2.png';
import  Engine  from '../../assets/placeholders/recent3.png';
import './RecentAdd.scss'




const { Meta } = Card;

var topRecent = {
    
    top: '561px',
    position: 'relative',
    zIndex: '1',
   
  }


function RecentAdd() {

    return (


        <section style={topRecent} className='top-recent'>

            
        <Container>


<div className='recent-add-spacing'>
        <span>Recently added</span>

       <a href="#" className="see-all">See All</a>


        </div>


            <Row gutter={16}>

            <Col lg={8} xs={24} className="recent-add-space">
        
  <Card
    hoverable
    // style={{ width: 240 }}
    cover={<img alt="example" src={Hood} className='recent-img' />}
  >
    FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
  </Card>

  </Col>

  <Col lg={8} xs={24} className="recent-add-space">
        
        <Card 
          hoverable
        //   style={{ width: 240 }}
          cover={<img alt="example" src={Door} className='recent-img'  />}
        >
            FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
        </Card>
      
        </Col>

        <Col lg={8} xs={24}>
        
        <Card 
          hoverable
        //   style={{ width: 240 }}
          cover={<img alt="example" src={Engine} className='recent-img'  />}
        >
           FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
        </Card>
      
        </Col>


  </Row>
  </Container>

  </section>

    )

}
  
export default RecentAdd;