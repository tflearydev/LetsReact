import React from 'react';
import { Container} from 'react-bootstrap'

import { Input, Col, Row  } from 'antd';
import './Email.scss'

const { Search } = Input;

const emailStyle = {
    position: 'relative',
    top: '581px',
    paddingTop: '50px',
    paddingBottom: '50px',
    backgroundColor: '#EBEBEB',
    marginTop: '75px'

    

}

function HomeEmail() {

    return (

    <section style={emailStyle} className='email-style'>
      {/* <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <br />
      <br />
      <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
      <br />
      <br /> */}

      <Container>


          <Row>


          <Col lg={12} className=" first-text">

<div>
Be the first to know about our daily sales!
</div>
</Col>

              <Col lg={12} className="submitt">
<div>
      <Search
        placeholder="Email Address"
        enterButton="Submit"
        size="large"
        onSearch={value => console.log(value)}
        className="submit-btn "
      />

</div>
</Col>

</Row>


</Container>
    </section>
    )
    
    }

    export default HomeEmail