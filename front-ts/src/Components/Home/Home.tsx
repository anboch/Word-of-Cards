import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'
import useSound from 'use-sound'
// import musicGrom from '../../volue/molniya.mp3'

function Home() {
  // const [playGrom] = useSound(
  //   musicGrom,
  //   { volume: 0.2 }
  // );
  // playGrom()

  return (
    <div>
    <div className='divBigHome'>
      <div>
      HOME
      <Link to='/info' style={{marginLeft:'20px'}}>Info</Link>
      </div>
      <div className='divLitleHome animate__hinge nav'>
      <Link to='/signup' className='nav'>Registration</Link>
      <Link to='/login'>Login</Link>
      </div>
      </div>
      <h1 className="animate__animated animate__zoomIn" style={{color:'blue', fontSize:'100px'}}> WORD OF CARDS </h1>
    </div>
  );
}

export default Home;
