import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./Jumbotron.scss";
import Search from "./Search";

function Jumbo(props) {





  return (
    <section className="head">
      <Jumbotron className={props.className}>
        <div className="overlay"></div>

        <Search />
      </Jumbotron>
    </section>
  );
}

export default Jumbo;
