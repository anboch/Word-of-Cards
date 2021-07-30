import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/types/index';
import Card from '../Card/Card';
import { CardType } from '../../redux/types/card/cardTypes';
import { useHistory } from 'react-router-dom';
import './Edit.css';
import { addCardSagaAC } from '../../redux/ActionCreators/Card/addCard';
import { saveEditDeckSagaAC } from '../../redux/ActionCreators/deck/saveEditDeckAC';
import { useForm } from 'react-hook-form';

function Edit() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const [renTitle, setRenTitle] = useState(true);
  const [addQuest, setAddQuest] = useState(false);
  const [editedDeckTitle, setEditedDeckTitle] = useState(
    state.deckReducer.editedDeck.title
  );
  // const [poiskCard, setPoiskCard] = useState('');

  const renameTitleDeck = (e: any) => {
    e.preventDefault();
    const newTitle = e.target.title.value;
    const deckId = state.deckReducer.editedDeck._id;
    dispatch(saveEditDeckSagaAC(deckId, newTitle));
    e.target.title.value = '';
    setRenTitle((pre) => !pre);
  };

  const addCard = (event: any) => {
    const question = event.question;
    const answer = event.answer;
    if (question && answer) {
      const deckId = state.deckReducer.editedDeck._id;
      dispatch(addCardSagaAC(deckId, question, answer));
    }
    setAddQuest(false);
  };

  const sortArrCard = state.deckReducer.editedDeck.cards.filter((el) =>
    el.question.toUpperCase().includes(state.deckReducer.poisk.toUpperCase())
  );

  return (
    <div>
      <div className="editDeck">
        {renTitle && (
          <div className="editButton">
            <h2>{state.deckReducer.editedDeck.title}</h2>
            <button
              className="button btn btn-success"
              onClick={(pre) => setRenTitle(!pre)}
            >
              изменить название колоды
            </button>
            <div>
              {' '}
              <button
                className="button btn btn-dark"
                onClick={() => setAddQuest(true)}
              >
                добавить карточку
              </button>
            </div>
          </div>
        )}
        <div>
          {!renTitle && (
            <form onSubmit={renameTitleDeck}>
              <input
                name="title"
                onChange={(e) => setEditedDeckTitle(e.target.value)}
                value={editedDeckTitle}
              />
              <button className="btn btn-success">OK</button>
            </form>
          )}
          {addQuest && (
            <div className="animate__animated animate__flipInY addQuest">
              <form onSubmit={handleSubmit(addCard)}>
                <input
                  {...register('question')}
                  placeholder="введите вопрос"
                  type="text"
                />
                <input
                  {...register('answer')}
                  placeholder="введите ответ"
                  type="text"
                />
                <button className="button btn btn-success">добавить</button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div style={{ height: '10px' }}></div>
      <div style={{ height: '10px' }}></div>
      <div className="listOfCards">
        {sortArrCard.map((el) => (
          <Card card={el} />
        ))}
      </div>
    </div>
  );
}

export default Edit;
