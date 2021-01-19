import React from "react";
import { Container } from "react-bootstrap";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => (
  <Container>
    <h2>Welcome</h2>
    <p>
      this is a users management tool. press the button below to enter the app.
    </p>
    <Nav>
      <LinkContainer
        className="btn btn-primary"
        to={{ pathname: "/users", query: {} }}
      >
        <NavItem eventKey={1}>Go To App</NavItem>
      </LinkContainer>
    </Nav>
  </Container>
);

export default Home;
