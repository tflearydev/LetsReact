import React from "react";
import Navbar from "../../components/navbar/Nav";
import Jumbo from "../../components/jumbotron/Jumbotron";
// import { Container } from 'react-bootstrap';
import "./Buyer.scss";
import Categories from "../../components/parts/Categories";
import RecentAdd from "../../components/parts/RecentAdd";
import RecentView from "../../components/parts/RecentView";
import Manufacturer from "../../components/parts/Manufacturer";
import Email from "../../components/home-email/Email";
import Footer from '../../components/footer/Footer'

// import { Container } from "react-bootstrap";

function Buyer() {
  return (
    <>
      <Navbar />
      <Jumbo />

      <Categories />

      <RecentAdd lg={8} xs={24} items_count={3} row_count = {1} />

      <RecentView />

      <Manufacturer />

      <Email />

      <Footer />
    </>
  );
}

export default Buyer;
