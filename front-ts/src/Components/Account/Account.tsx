import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeckList from '../DeckList/DeckList';
import { downloadDecksSagaAC } from '../../redux/ActionCreators/deck/downloadDeckAC';
import { State } from '../../redux/types/index';
import './Account.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

export default function Account() {
  // const { register, handleSubmit } = useForm();
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const action = downloadDecksSagaAC();
    dispatch(action);
  }, [dispatch]);

  const poiskCard = (event: any) => {
    dispatch({ type: 'POISK_CARD', payload: event.poisk });
  };

  !state.userReducer.user._id && /*playTrue()|| */ history.push('/login');

  return (
    <div className="glavDiv">
      <h3 className="d-flex justify-content-center animate__animated animate__zoomInUp">
        Привет {state.userReducer.user.login.toUpperCase()}!
      </h3>
      <DeckList />
    </div>
  );
}
