import { ResultOfAnswerSagaAction } from '../../types/card/deckActionTypes';
import { CardType } from '../../types/card/cardTypes';
const { REACT_APP_SERVER_URL } = process.env;

// заглушка  any разобраться!
export const resultOfAnswerFetch = async ({
  deckInGameId,
  cardInGame,
  remembered,
}: {
  deckInGameId: string;
  cardInGame: CardType;
  remembered: boolean;
}) => {
  const req = await fetch(`${REACT_APP_SERVER_URL}card/result`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ deckInGameId, cardInGame, remembered }),
  });
  const res = await req.json();
  if (req.status === 200) {
    return res;
  } else {
  }
};

// export const resultOfAnswerAC = (deck: DeckType): GetDeckAction => ({
//   type: 'SEND_RESULT_ANSWER',
//   payload: deck,
// });

export const resultOfAnswerSagaAC = (
  deckInGameId: string,
  cardInGame: CardType,
  remembered: boolean
): ResultOfAnswerSagaAction => ({
  type: 'SEND_RESULT_ANSWER_SAGA',
  payload: { deckInGameId, cardInGame, remembered },
});
