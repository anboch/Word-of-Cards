import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
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
