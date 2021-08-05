import React, { useState } from 'react';
import { CardType } from '../../redux/types/card/cardTypes';
import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCardSagaAC } from '../../redux/ActionCreators/Card/delCard';
import { useForm } from 'react-hook-form';
import { renameCardSagaAC } from '../../redux/ActionCreators/Card/renCard';
import { State } from '../../redux/types';

function Card({ card }: { card: any }) {
  const state = useSelector((state: State) => state);
  const { register, handleSubmit } = useForm();
  const [inpState, setIntState] = useState(true);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState(card.question);
  const [answer, setAnswer] = useState(card.answer);

  const renameCard = (e: any) => {
    const deckId = state.deckReducer.editedDeck._id;
    dispatch(renameCardSagaAC(deckId, card._id, question, answer));
    setIntState((pre) => !pre);
  };

  const deleteCard = (deckId: string, cardId: string) => {
    dispatch(deleteCardSagaAC(deckId, cardId));
  };

  return (
    <div className="cardDiv d-flex justify-content-between">
      <div className="titleDiv justify-content-center">
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {card.question}
        </p>
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {card.answer}
        </p>
      </div>
      {inpState ? (
        <div className="buttonsDiv">
          <button
            type="button"
            className="button btn btn-success"
            onClick={() => setIntState((pre) => !pre)}
          >
            редактировать вопрос и ответ
          </button>
          <button
            type="button"
            className="button btn btn-danger"
            onClick={() =>
              deleteCard(state.deckReducer.editedDeck._id, card._id)
            }
          >
            удалить карточку
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(renameCard)}>
          <input
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            // {...register('question')}
          />
          <input
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
            // {...register('answer')}
            // placeholder={card.answer}
          />
          <button className="button btn btn-dark"> OK </button>
        </form>
      )}
    </div>
  );
}

export default Card;
