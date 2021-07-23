import {
  DownloadDecksAction,
  DownloadDecksSagaAction,
} from '../../types/deck/deckActionTypes';
import { AllDecksType } from '../../types/deck/deckTypes';
const { REACT_APP_SERVER_URL } = process.env;

export const downloadDeckFetch = async () => {
  const req = await fetch(`${REACT_APP_SERVER_URL}deck/all`);
  const res = await req.json();
  if (req.status === 200) {
    return res;
  } else {
  }
};

export const downloadDecksAC = (
  allDecks: AllDecksType
): DownloadDecksAction => ({
  type: 'DOWNLOAD_DECKS',
  payload: allDecks,
});

export const downloadDecksSagaAC = (): DownloadDecksSagaAction => ({
  type: 'DOWNLOAD_DECKS_SAGA',
});
