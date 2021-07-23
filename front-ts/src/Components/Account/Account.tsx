import React from 'react';
import { useSelector} from "react-redux";

function Account() {
  const login = useSelector(state => state)
 
  return (
    <div>
      Account
      {/* <h1>HELLO {state.userReducer.user.login}</h1> */}
    </div>
  );
}

export default Account;
