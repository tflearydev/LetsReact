import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import Buyer from './pages/homepage/Buyer';
import Seller from './pages/homepage/Seller';

import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
import './App.scss';




function App() {


  return (
    <>
    
<BrowserRouter>
    
     <Switch>
            <Route exact path='/' component={Buyer} />
            <Route path='/sell' component={Seller} />
          
            </Switch>

          </BrowserRouter>
     
    </>
  );
}

export default App;