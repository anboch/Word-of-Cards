import {
  GetDeckAction,
  GetDeckSagaAction,
} from '../../types/deck/deckActionTypes';
import { DeckType } from '../../types/deck/deckTypes';
const { REACT_APP_SERVER_URL } = process.env;

export const getDeckFetch = async (deckId: string) => {
  const req = await fetch(`${REACT_APP_SERVER_URL}deck/`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ deckId }),
  });
  const res = await req.json();
  if (req.status === 200) {
    return res;
  } else {
  }
};

export const getDeckAC = (deckId: DeckType): GetDeckAction => ({
  type: 'GET_DECK',
  payload: deckId,
});

export const getDeckSagaAC = (deckId: String): GetDeckSagaAction => ({
  type: 'GET_DECK_SAGA',
  payload: deckId,
});
