import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import useSound from 'use-sound';
import { State } from '../../redux/types';
import { useSelector } from 'react-redux';
// import musicGrom from '../../volue/mol.mp3'

function Home() {
  // const [playGrom] = useSound(
  //   musicGrom,
  //   { volume: 0.2 }
  // );
  // playGrom()
  const history = useHistory();
  const state = useSelector((state: State) => state);
  state.userReducer.user._id && /*playTrue()|| */ history.push('/account');
  return (
    <div>
      {/* <div className='divBigHome'>
      <div>
      HOME
      <Link to='/demo' style={{marginLeft:'20px'}}>Demo</Link>
      <Link to='/info' style={{marginLeft:'20px'}}>Info</Link>
      </div>
      <div className='divLitleHome animate__hinge nav'>
      <Link to='/signup' className='nav'>Registration</Link>
      <Link to='/login'>Login</Link>
      </div>
      </div>
      <h1 className="animate__animated animate__zoomIn" style={{color:'blue', fontSize:'100px'}}> WORD OF CARDS </h1>
      <img className='imgCard' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRT0gizSf4vKU1d1HtwNMfNLSWhrVxn-yjw&usqp=CAU'/> */}
    </div>
  );
}

export default Home;
