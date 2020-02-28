import React from 'react';
import {Container} from 'react-bootstrap';
import {Col, Row} from 'antd';
import './SellerTabs.scss'

function SellerTabs() {
    return(


        <div className='tab-section mx-auto'>
            <Container className='slide'>
                <Row>


                    <Col lg={3} xs={7}>


                       <a className="tab-style active"> New posting</a>


                    </Col>



                    <Col lg={3} xs={7} >
                        <a className="tab-style inv" >Inventory</a>
                    </Col>



                    <Col lg={3} xs={7} className="left-tab" >
                        <a className="tab-style">Order history</a>
                    </Col>



                    <Col lg={3} xs={7} >
                       <a className="tab-style">Notifications</a>
                    </Col>



                    <Col lg={3} xs={7} className='last-tab '>
                        <a className="tab-style">Employees</a>
                    </Col>




                </Row>



            </Container>

        </div>



    )
}

export default SellerTabs;
