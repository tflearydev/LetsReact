import React from 'react';
import './MoreTags.scss';
import {Container} from 'react-bootstrap';
import {Row, Col} from 'antd'

function MoreTags() {
    return(

      
<Container>
           <Row style={{ top: '140px', position: 'relative'}}>

               <Col lg={24}>


                   <div className='tag-title'>Explore more options</div>

                   <Row>

                   <div className="similar-tags">Repainted</div>

<div className="similar-tags">New bearings</div>

<div className="similar-tags">Oil treated</div>

<div className="similar-tags">Repainted</div>

<div className="similar-tags">New bearings</div>

<div className="similar-tags">Oil treated</div>

<div className="similar-tags">Repainted</div>

<div className="similar-tags">New bearings</div>



</Row>


               </Col>

               


           </Row>

           </Container>

         
       
    )
}

export default MoreTags;