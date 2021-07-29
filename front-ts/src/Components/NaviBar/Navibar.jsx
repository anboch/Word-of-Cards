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
          <Link to="/" className="navbar-light navbar-brand">
            <img
              alt=""
              src="/logoCards.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Word Of Cards
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="d-flex justify-content-end">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Switch>
                  <Route exact path="/">
                    <Link to="/login" className="navbar-nav nav-link">
                      Вход
                    </Link>
                    <Link to="/signup" className="navbar-nav nav-link">
                      Регистрация
                    </Link>
                    <Link to="/public" className="navbar-nav nav-link">
                      Публичные колоды
                    </Link>
                  </Route>
                  <Route exact path="/login">
                    <Link to="/signup" className="navbar-nav nav-link">
                      Регистрация
                    </Link>
                    <Link to="/" className="navbar-nav nav-link">
                      На главную
                    </Link>
                  </Route>
                  <Route exact path="/signup">
                    <Link to="/login" className="navbar-nav nav-link">
                      Вход
                    </Link>
                    <Link to="/" className="navbar-nav nav-link">
                      На главную
                    </Link>
                  </Route>
                  <Route exact path="/account">
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Название колоды"
                        className="mr-2"
                        aria-label="Search"
                        style={{ marginRight: '2rem' }}
                      />
                      {/* <Button variant="outline-success">Поиск</Button> */}
                    </Form>
                    <Link to="/public" className="navbar-nav nav-link">
                      Публичные колоды
                    </Link>
                    <Link to="/login" className="navbar-nav nav-link">
                      Создать колоду
                    </Link>
                    <Link to="/logout" className="navbar-nav nav-link">
                      Выход
                    </Link>
                  </Route>
                  <Route exact path="/game">
                    <Link to="/account" className="navbar-nav nav-link">
                      Мои колоды
                    </Link>
                    <Link to="/logout" className="navbar-nav nav-link">
                      Выход
                    </Link>
                  </Route>
                  <Route exact path="/public">
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Поиск"
                        className="mr-2"
                        aria-label="Search"
                        style={{ marginRight: '2rem' }}
                      />
                      {/* <Button variant="outline-success">Поиск</Button> */}
                    </Form>
                    <Link to="/account" className="navbar-nav nav-link">
                      Мои колоды
                    </Link>
                    <Link to="/logout" className="navbar-nav nav-link">
                      Выход
                    </Link>
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
