import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
import './App.scss';


function App() {


  return (
    <>
      <Router>

      <Switch>
            <Route exact path='/' component={Homepage} />
            
          
          </Switch>


      </Router>
    </>
  );
}

export default App;