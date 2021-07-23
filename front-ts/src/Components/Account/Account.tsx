import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import DeckList from '../DeckList/DeckList';
import { downloadDecksSagaAC } from '../../redux/ActionCreators/deck/downloadDeckAC';
import {State} from '../../redux/types/index'
export default function Account() {
  const state = useSelector((state:State) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    const action = downloadDecksSagaAC();
    dispatch(action);
  }, [dispatch]);
  return (
    <div>
       <h3>{JSON.stringify(state)}</h3>
      <DeckList />
    </div>
  );
}
