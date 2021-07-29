import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import useSound from 'use-sound';
import { State } from '../../redux/types';
import { useSelector } from 'react-redux';
import {CSSTransition} from 'react-transition-group'


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
    <div className='bigDiv'>
  
      <CSSTransition transitionName='page' timeout={10000} onmountexit >
     <div className='litlDiv page'>Word of Cards   </div>
     </CSSTransition>
     <div></div>
    </div>
  );
}

export default Home;
