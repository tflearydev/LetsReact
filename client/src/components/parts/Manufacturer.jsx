import React from 'react';
import { Container } from 'react-bootstrap'
import { Card, Col, Row, Avatar } from 'antd';

import manu1  from '../../assets/manufacturers/manu1.png'
import  manu2  from '../../assets/manufacturers/manu2.png'
import  manu3  from '../../assets/manufacturers/manu3.png'
import  manu4  from '../../assets/manufacturers/manu4.png'
import  manu5  from '../../assets/manufacturers/manu5.png'
import  manu6  from '../../assets/manufacturers/manu6.png'


import './Manufacturer.scss';

const { Meta } = Card;


var top5 = {
    
  top: '625px',
  position: 'relative',
  zIndex: '1'

}





function Manufacturer() {

    return (


      <section style={top5} className='top6'>
      <Container>


      <div className='recent-spacing'>
        <span>Shop by manufacturer</span>

       <a href="#" className="see-all">See All</a>


        </div>

<div style={{ padding: '0px' }}>



    <Row gutter={90} className='row-style'>


     <Col xs={12} lg={5}   className="manus manu-card1">
         <a href="#" alt="">
        <Card bordered={false} className="manu-card" 
        cover={
            <img
            alt="example"
            src={manu1}
            className='manu-img1 mx-auto detroit'
          />
            }>
     


        </Card>
        </a>
      </Col>


      <Col xs={12} lg={5} className="padding2 manus manu-card2" >
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu2}
            className='manu-img2 mx-auto freightliner'
          />
            }>
      
        </Card>
        </a>
      </Col>
      



      <Col xs={12} lg={4} className="manus manu-card3">
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu3}
            className='manu-img3 mx-auto cummins'
          />
            }>
     
        </Card>
        </a>
      </Col>



      <Col xs={12} lg={5}  className="manus manu-card4">
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu4}
            className='manu-img4 mx-auto paccar'
          />
            }>
        
        </Card>
        </a>
      </Col>

     


      <Col xs={12} sm={12} lg={5}  className="manus manu-card5">
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu5}
            className='manu-img5 mx-auto volvo'
          />
            }>
       
        </Card>
        </a>
      </Col>

      <Col xs={{ span: 11, offset: 1 }} sm={12} lg={5}  className="manus manu-card6">
         <a href="#" alt="">
        <Card bordered={false} className="manu-card"
        cover={
            <img
            alt="example"
            src={manu6}
            className='manu-img6 mx-auto'
          />
            }>
       
        </Card>
        </a>
      </Col>

      

      {/* <Col xs={{ span: 11, offset: 1 }} sm={8} lg={4} >
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