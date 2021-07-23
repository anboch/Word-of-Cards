import "./App.css";
import {
  Route,
  Switch
} from "react-router-dom";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Game from "../Game/Game";
import Account from "../Account/Account";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/signup">
          <Registration />
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

      </Switch>
    </div>
  );
}

export default App;
