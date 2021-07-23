import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DeckList from '../DeckList/DeckList';
import { downloadDecksSagaAC } from '../../redux/ActionCreators/deck/downloadDeckAC';

export default function Account() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = downloadDecksSagaAC();
    dispatch(action);
  }, [dispatch]);
  return (
    <div>
      <DeckList />
    </div>
  );
}
