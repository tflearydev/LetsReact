import React from 'react';

import { Card, Col, Row, Avatar } from 'antd';
import { Container } from 'react-bootstrap';
import  Hood  from '../../assets/placeholders/recent1.png';
import  Door  from '../../assets/placeholders/recent2.png';
import  Engine  from '../../assets/placeholders/recent3.png';
import './RecentView.scss'




const { Meta } = Card;

var topRecentView = {
    
    top: '556px',
    position: 'relative',
    zIndex: '9999',
    marginBottom: '30px'
  }


function RecentView() {

    return (


        <section style={topRecentView}>

            
        <Container>


<div className='recent-view-spacing'>
        <span>Recently viewed</span>

       <a href="#" className="see-all">See All</a>


        </div>


            <Row gutter={16}>

            <Col lg={4}>
        
  <Card
    hoverable
    // style={{ width: 240 }}
    cover={<img alt="example" src={Hood} className='recent-view-img' />}
  >
    FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
  </Card>

  </Col>

  <Col lg={4}>
        
        <Card
          hoverable
        //   style={{ width: 240 }}
          cover={<img alt="example" src={Door} className='recent-view-img'  />}
        >
            FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
        </Card>
      
        </Col>

        <Col lg={4}>
        
        <Card
          hoverable
        //   style={{ width: 240 }}
          cover={<img alt="example" src={Engine} className='recent-view-img'  />}
        >
           FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
        </Card>
      
        </Col>

        <Col lg={4}>
        
        <Card
          hoverable
        //   style={{ width: 240 }}
          cover={<img alt="example" src={Engine} className='recent-view-img'  />}
        >
           FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
        </Card>
      
        </Col>
        <Col lg={4}>
        
        <Card
          hoverable
        //   style={{ width: 240 }}
          cover={<img alt="example" src={Engine} className='recent-view-img'  />}
        >
           FREIGHTLINER
          <Meta title="Detroit engine - DD5 - 1.5 Lt." />
          <div className="recent-price">$14,000</div>
          {/* <Meta title="Detroit engine - DD5 - 1.5 Lt." description="www.instagram.com" /> */}
        </Card>
      
        </Col>
        <Col lg={4}>
        
        <Card
          hoverable
        //   style={{ width: 240 }}
          cover={<img alt="example" src={Engine} className='recent-view-img'  />}
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
  
export default RecentView;