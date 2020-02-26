import React from 'react';
import {Container} from 'react-bootstrap';
import {Col, Row} from 'antd';
import './SellerTabs.scss'

function SellerTabs() {
    return(


        <div className='tab-section mx-auto'>
            <Container>
                <Row>


                    <Col lg={3} >


                       <a className="tab-style active"> New posting</a>


                    </Col>



                    <Col lg={3}>
                        <a className="tab-style">Inventory</a>
                    </Col>



                    <Col lg={3} className="left-tab">
                        <a className="tab-style">Order history</a>
                    </Col>



                    <Col lg={3}>
                       <a className="tab-style">Notifications</a>
                    </Col>



                    <Col lg={3} className='last-tab'>
                        <a className="tab-style">Employees</a>
                    </Col>




                </Row>



            </Container>

        </div>



    )
}

export default SellerTabs;
