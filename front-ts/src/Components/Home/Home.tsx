import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'
import useSound from 'use-sound'
// import musicGrom from '../../volue/mol.mp3'

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
      <img className='imgCard' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuitO9okI8ivWCp8av0D1XCJ4ZXcH2tB3ug&usqp=CAU'/>
    </div>
  );
}

export default Home;
