import {
  CopyDeckAction,
  CopyDeckSagaAction,
} from '../../types/deck/deckActionTypes';
import { DeckType } from '../../types/deck/deckTypes';
const { REACT_APP_SERVER_URL } = process.env;

export const copyDeckFetch = async (deckId: string) => {
  const req = await fetch(`${REACT_APP_SERVER_URL}deck/copy`, {
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

export const copyDeckAC = (copiedDeck: DeckType): CopyDeckAction => ({
  type: 'COPY_DECK',
  payload: copiedDeck,
});

export const copyDeckSagaAC = (deckId: string): CopyDeckSagaAction => ({
  type: 'COPY_DECK_SAGA',
  payload: deckId,
});
