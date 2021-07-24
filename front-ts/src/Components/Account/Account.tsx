import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import DeckList from '../DeckList/DeckList';
import { downloadDecksSagaAC } from '../../redux/ActionCreators/deck/downloadDeckAC';
import {State} from '../../redux/types/index'
import { Link } from 'react-router-dom';
export default function Account() {
  const state = useSelector((state:State) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    const action = downloadDecksSagaAC();
    dispatch(action);
  }, [dispatch]);
  return (
    <div>
      <button onClick={()=>window.location.href="/"}>🔙 Logout</button>
       <h3 className='animate__animated animate__zoomInUp'>HELLO {state.userReducer.user.login.toUpperCase()}!</h3>
      <DeckList />
    </div>
  );
}
