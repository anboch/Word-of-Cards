import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './Home.css'

function Home(props) {
  return (
    <div className='divBigHome'>
      <div>
      HOME
      </div>
      <div className='divLitleHome'>
      <Link to='/signup'>Registration</Link>
      <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}

export default Home;
