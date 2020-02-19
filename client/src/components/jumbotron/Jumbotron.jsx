import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./Jumbotron.scss";
import Search from "./Search";

function Jumbo() {
  return (
    <section className="head">
      <Jumbotron className="jumbo">
        <div className="overlay"></div>

        <Search />
      </Jumbotron>
    </section>
  );
}

export default Jumbo;
