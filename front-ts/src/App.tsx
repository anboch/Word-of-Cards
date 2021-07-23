import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { downloadDecksSagaAC } from './redux/ActionCreators/deck/downloadDeckAC';
import Account from './components/Account';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = downloadDecksSagaAC();
    dispatch(action);
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </div>
  );
}
