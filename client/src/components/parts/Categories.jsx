import React from 'react';
import { Container } from 'react-bootstrap'
import { Card, Col, Row, Avatar } from 'antd';

import  Engine  from '../../assets/big5/engine.png'
import  Axel  from '../../assets/big5/axel.png'
import  Transmission  from '../../assets/big5/transmission.png'
import  Cab  from '../../assets/big5/cab.png'
import  Hood  from '../../assets/big5/hood.png'
import  All  from '../../assets/big5/allparts.png'
import './Categories.scss';

const { Meta } = Card;


var top5 = {
    
  top: '530px',
  position: 'relative',
  zIndex: '1'

}

function Categories() {

    return (


      <section style={top5} className='top-5'>
      <Container>



<div style={{ background: 'white'}}>



    <Row gutter={16}>


     <Col lg={4} sm={8} xs={8} className="cat-pad">
         <a href="#" alt="">
        <Card bordered={false}  className="cat-div"
        cover={
            <img
            alt="example"
            src={Engine}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Engines"
      className="man-card-text"
      
    />
        </Card>
        </a>
      </Col>


      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}  className="cat-div"
        cover={
            <img
            alt="example"
            src={Axel}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Axles"
      className="man-card-text"
      
    />
        </Card>
        </a>
      </Col>



      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false} className="cat-div"
        cover={
            <img
            alt="example"
            src={Transmission}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Transmissions"
      className="man-card-text"
      
    />
        </Card>
        </a>
      </Col>



      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false} className="cat-div"
        cover={
            <img
            alt="example"
            src={Cab}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Cabs"
      className="man-card-text"
      
    />
        </Card>
        </a>
      </Col>



      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false} className="cat-div"
        cover={
            <img
            alt="example"
            src={Hood}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Hoods"
      className="man-card-text"
      
    />
        </Card>
        </a>
      </Col>


      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false} className="cat-div"
        cover={
            <img
            alt="example"
            src={All}
            className='cat-img mx-auto'
          />
          
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="All parts"
      className="man-card-text"
      
    />
        </Card>
        </a>
      </Col>


    </Row>

    
  </div>
  
  </Container>
</section>

    )

}

export default Categories