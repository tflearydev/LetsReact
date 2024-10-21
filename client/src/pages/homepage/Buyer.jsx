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


function Buyer() {
  return (
    <>
      <Navbar className = 'outer-nav' />

      {/* beginning of jumbotron */}
      <Jumbo className='jumbo'/>
{/* end of jumbotron */}
      <Categories />


      <RecentAdd className='top-recent' lg={8} xs={24} items_count={3} row_count = {1} />

      <RecentView className='top-recent-view' text='Recently Viewed' />

      <Manufacturer className='top6' />

      <Email className='email-style' />

      <Footer className='foot-style' />
    </>
  );
}

export default Buyer;
