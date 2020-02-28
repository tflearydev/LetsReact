import React from 'react';
import './Product.scss';
import Nav from '../../components/navbar/Nav'
import {Container} from 'react-bootstrap'
import { Row, Col } from 'antd'


const thumbnail = {
 
    top: '119px'
}

function Product() {

    return(
        // <div className={props.className}>Hello</div>

        <>
        <Nav className='outer-nav-product' />


        <Container>


                <Row style={thumbnail}>

                    <Col lg={14}>
                        <div>Hello</div>
                    </Col>

                    <Col lg={10}>
                        <div>Hello</div> 
                    </Col>


                </Row>



        </Container>

        
        </>

    )
}

export default Product