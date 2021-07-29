import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';

export default function Navibar() {
  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logoCards.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Word Of Cards
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="d-flex justify-content-end">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav></Nav>
              <Nav>
                <Switch>
                  <Route exact path="/">
                    <Nav.Link href="/login">Вход</Nav.Link>
                    <Nav.Link href="/signup">Регистрация</Nav.Link>
                  </Route>
                  <Route exact path="/login">
                    <Nav.Link href="/signup">Регистрация</Nav.Link>
                    <Nav.Link href="/">На главную</Nav.Link>
                  </Route>
                  <Route exact path="/signup">
                    <Nav.Link href="/login">Вход</Nav.Link>
                    <Nav.Link href="/">На главную</Nav.Link>
                  </Route>
                  <Route exact path="/account">
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Название колоды"
                        className="mr-2"
                        aria-label="Search"
                      />
                      {/* <Button variant="outline-success">Поиск</Button> */}
                    </Form>
                    <Link to="/public">Публичные колоды</Link>
                    <Link to="/newDeck">Создать колоду</Link>
                    <Link to="/logout">Выход</Link>
                  </Route>
                  <Route exact path="/game">
                    <Nav.Link href="/account">Мои колоды</Nav.Link>
                    <Nav.Link href="/logout">Выход</Nav.Link>
                  </Route>
                  <Route exact path="/public">
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Поиск"
                        className="mr-2"
                        aria-label="Search"
                      />
                      {/* <Button variant="outline-success">Поиск</Button> */}
                    </Form>
                    <Nav.Link href="/account">Мои колоды</Nav.Link>
                    <Nav.Link href="/logout">Выход</Nav.Link>
                  </Route>
                </Switch>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
