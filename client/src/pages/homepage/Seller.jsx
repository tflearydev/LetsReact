import React from "react";
import Navbar from "../../components/navbar/Nav";
import Jumbo2 from "../../components/jumbotron/Jumbo2";
// import { Container } from 'react-bootstrap';
import "./Buyer.scss";
import SellerTabs from '../../components/seller-tabs/SellerTabs';
import SellerAccordion from '../../components/seller-accordion/SellerAccordion';
import RecentAdd from "../../components/parts/RecentAdd";
import Email from '../../components/home-email/Email'
import Footer from '../../components/footer/Footer'
import { Card, Col, Row, Avatar } from "antd";

// import RecentView from "../../components/parts/RecentView"
// import Categories from "../../components/parts/Categories";
// import RecentAdd from "../../components/parts/RecentAdd";
// import RecentView from "../../components/parts/RecentView";
// import Manufacturer from "../../components/parts/Manufacturer";
// import Email from "../../components/home-email/Email";
// import Footer from '../../components/footer/Footer'

// import { Container } from "react-bootstrap";

// const recentA = {
//   top: '200px !important'
// }

function Seller() {
  return (
    <>
      <Navbar />
      <Jumbo2 />
      <SellerTabs />

      
      <SellerAccordion />
      
      <RecentAdd className="top-recent2" lg={8}/>

      <Email className='email-style2' />

      <Footer className='foot-style2' />

      {/* <RecentView className='top-recent-view2' /> */}
      


      {/* <Jumbo />

      <Categories />

      <RecentAdd />

      <RecentView />

      <Manufacturer />

      <Email />

      <Footer /> */}
    </>
  );
}

export default Seller;
