import React from "react";
import Navbar from "../../components/navbar/Nav";
import Jumbo from "../../components/jumbotron/Jumbotron";
// import { Container } from 'react-bootstrap';
import "./Homepage.scss";
import Categories from "../../components/parts/Categories";
import RecentAdd from "../../components/parts/RecentAdd";
import RecentView from "../../components/parts/RecentView";
import Manufacturer from "../../components/parts/Manufacturer";
import Email from "../../components/home-email/Email";
import Footer from '../../components/footer/Footer'

// import { Container } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Navbar />
      <Jumbo />

      <Categories />

      <RecentAdd />

      <RecentView />

      <Manufacturer />

      <Email />

      <Footer />
    </>
  );
}

export default Homepage;
