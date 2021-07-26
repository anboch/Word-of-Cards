import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeckList from '../DeckList/DeckList';
import { downloadDecksSagaAC } from '../../redux/ActionCreators/deck/downloadDeckAC';
import { State } from '../../redux/types/index';
import './Account.css';
import { useForm } from 'react-hook-form';

export default function Account() {
  const { register, handleSubmit } = useForm();
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = downloadDecksSagaAC();
    dispatch(action);
  }, [dispatch]);

  const poiskCard = (event: any) => {
    dispatch({ type: 'POISK_CARD', payload: event.poisk });
  };

  return (
    <div className="glavDiv">
      <div className="divHat">
        <button onClick={() => (window.location.href = '/')}>🔙 Выход</button>
        <form onSubmit={handleSubmit(poiskCard)}>
          <input
            {...register('poisk')}
            className="divSearch"
            placeholder=" 🔍  поиск колоды"
          />
          <button className="divSearch">✔</button>
        </form>
      </div>
      <h3 className="animate__animated animate__zoomInUp">
        Привет {state.userReducer.user.login.toUpperCase()}!
      </h3>
      <DeckList />
    </div>
  );
}
