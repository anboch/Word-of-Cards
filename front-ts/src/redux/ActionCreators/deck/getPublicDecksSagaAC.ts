import {
  GetPublicDecksAction,
  GetPublicDecksSagaAction,
} from '../../types/deck/deckActionTypes';
import { AllDecksType } from '../../types/deck/deckTypes';
const { REACT_APP_SERVER_URL } = process.env;

export const getPublicDecksFetch = async () => {
  const req = await fetch(`${REACT_APP_SERVER_URL}deck/allpublic`, {
    credentials: 'include',
  });
  const res = await req.json();
  if (req.status === 200) {
    return res;
  } else {
  }
};

export const getPublicDecksAC = (
  allPublicDecks: AllDecksType
): GetPublicDecksAction => ({
  type: 'GET_PUBLIC_DECKS',
  payload: allPublicDecks,
});

export const getPublicDecksSagaAC = (): GetPublicDecksSagaAction => ({
  type: 'GET_PUBLIC_DECKS_SAGA',
});
