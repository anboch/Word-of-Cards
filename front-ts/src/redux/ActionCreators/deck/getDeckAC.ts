import {
  GetDeckAction,
  GetDeckSagaAction,
} from '../../types/deck/deckActionTypes';
import { DeckType } from '../../types/deck/deckTypes';
const { REACT_APP_SERVER_URL } = process.env;

export const getDeckFetch = async () => {
  const req = await fetch(`${REACT_APP_SERVER_URL}deck/all`);
  const res = await req.json();
  if (req.status === 200) {
    console.log('res:', res);
    return res;
  } else {
  }
};

export const getDecksAC = (deck: DeckType): GetDeckAction => ({
  type: 'GET_DECK',
  payload: deck,
});

export const getDecksSagaAC = (deckId: String): GetDeckSagaAction => ({
  type: 'GET_DECK_SAGA',
  payload: deckId,
});
