import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Buyer from './pages/homepage/Buyer';
import Seller from './pages/homepage/Seller';
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
import './App.scss';


function App() {


  return (
    <>
      <Router>

      <Switch>
            <Route exact path='/' component={Buyer} />
            <Route exact path='/sell' component={Seller} />
          
          </Switch>


      </Router>
    </>
  );
}

export default App;