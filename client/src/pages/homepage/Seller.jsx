import React from "react";
import Navbar from "../../components/navbar/Nav";
import Jumbo2 from "../../components/jumbotron/Jumbo2";
// import { Container } from 'react-bootstrap';
import "./Buyer.scss";
import SellerTabs from "../../components/seller-tabs/SellerTabs";
import SellerAccordion from "../../components/seller-accordion/SellerAccordion";
import RecentAdd from "../../components/parts/RecentAdd";
import RecentAdd2 from "../../components/parts/RecentAdd2";
import Email from "../../components/home-email/Email";
import Footer from "../../components/footer/Footer";
import { Card, Col, Row, Avatar } from "antd";


function Seller() {
  return (
    <>
      <Navbar className="outer-nav" />
      <Jumbo2 />
      <SellerTabs />

      <SellerAccordion />

      <RecentAdd2 className="top-recent2" lg={8} xs={12} />

      <Email className="email-style2" />

      <Footer className="foot-style2" />

      
    </>
  );
}

export default Seller;
