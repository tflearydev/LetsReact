import React from 'react';
import { Container } from 'react-bootstrap'
import { Card, Col, Row, Avatar } from 'antd';

import manu1  from '../../assets/manufacturers/manu1.png'
import  manu2  from '../../assets/manufacturers/manu2.png'
import  manu3  from '../../assets/manufacturers/manu3.png'
import  manu4  from '../../assets/manufacturers/manu4.png'
import  manu5  from '../../assets/manufacturers/manu5.png'


import './Manufacturer.scss';

const { Meta } = Card;


var top5 = {
    
  top: '625px',
  position: 'relative',
  zIndex: '1'

}

function Manufacturer() {

    return (


      <section style={top5}>
      <Container>


      <div className='recent-spacing'>
        <span>Shop by manufacturer</span>

       <a href="#" className="see-all">See All</a>


        </div>

<div style={{ padding: '0px' }}>



    <Row gutter={90}>


     <Col lg={5}>
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu1}
            className='manu-img1 mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}
{/* 
        <Meta
      title="Engines"
      className="card-text"
      
    /> */}


        </Card>
        </a>
      </Col>


      <Col lg={5} className="padding2">
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu2}
            className='manu-img2 mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        {/* <Meta
      title="Axles"
      className="card-text"
      
    /> */}
        </Card>
        </a>
      </Col>



      <Col lg={4}>
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu3}
            className='manu-img3 mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        {/* <Meta
      title="Transmissions"
      className="card-text"
      
    /> */}
        </Card>
        </a>
      </Col>



      <Col lg={5}>
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu4}
            className='manu-img4 mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}
{/* 
        <Meta
      title="Cabs"
      className="card-text"
      
    /> */}
        </Card>
        </a>
      </Col>



      <Col lg={5}>
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu5}
            className='manu-img5 mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        {/* <Meta
      title="Hoods"
      className="card-text"
      
    /> */}
        </Card>
        </a>
      </Col>


      {/* <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={manu6}
            className='cat-img mx-auto'
          />
            }>
        

        <Meta
      title="See All"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col> */}


    </Row>

    
  </div>
  
  </Container>
</section>

    )

}

export default Manufacturer