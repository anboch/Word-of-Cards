import './App.css';
import { Route, Switch } from 'react-router-dom';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Game from '../Game/Game';
import Account from '../Account/Account';
import Info from '../Info/Info';
import Demo from '../Demo/Demo';
import Navibar from '../NaviBar/Navibar';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Edit from '../Edit/Edit';
import PublicDeckList from '../PublicDeckList/PublicDeckList';
import NewDeck from '../NewDeck/NewDeck';

function App() {
  return (
    <div className="d-flex justify-content-center">
      <Navibar />
      <Container style={{ marginTop: '80px' }}>
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>

          <Route exact path="/signup">
            <Registration />
          </Route>

          <Route exact path="/demo">
            <Demo />
          </Route>

          <Route exact path="/edit">
            <Edit />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/game">
            <Game />
          </Route>

          <Route exact path="/account">
            <Account />
          </Route>

          <Route exact path="/public">
            <PublicDeckList />
          </Route>

          <Route exact path="/info">
            <Info />
          </Route>

          <Route exact path="/newDeck">
            <NewDeck/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
