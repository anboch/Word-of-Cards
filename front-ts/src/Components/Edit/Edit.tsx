
import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {State} from '../../redux/types/index'
import Card from '../Card/Card';
import {CardType} from '../../redux/types/card/cardTypes'
import {useHistory} from 'react-router-dom'
import './Edit.css'
import { addCardSagaAC } from '../../redux/ActionCreators/Card/addCard';
import {saveEditDeckSagaAC} from '../../redux/ActionCreators/deck/saveEditDeckAC'
import {useForm} from 'react-hook-form'
import { stat } from 'fs';


function Edit() {
  const {register,handleSubmit} = useForm()
  const history = useHistory()
  const state = useSelector((state:State) => state)
  const dispatch = useDispatch()
  const [renTitle, setRenTitle] = useState(true)
  const [addQuest, setAddQuest] =useState(false)

 const renameTitleDeck =(e:any) => {
   e.preventDefault()
  //  dispatch({type:'RENAME_TITLE_DECK', payload:e.target.title.value})
  const newTitle = e.target.title.value
  const deckId = state.deckReducer.editedDeck._id
  dispatch(saveEditDeckSagaAC(deckId,newTitle))
   e.target.title.value=''
   setRenTitle((pre) => !pre)
 }

//  const saveDeck = (deck:object) => {
// dispatch(saveEditDeckSagaAC(deck))
// history.push('/account')
//  }

 const addCard = (event:any) => {
   
   const question = event.question
   const answer = event.answer
   const deckId = state.deckReducer.editedDeck._id
   dispatch(addCardSagaAC(deckId,question,
  answer))
  setAddQuest(false)
 }

  return (
    <div >
     <div className='button3'>
       {addQuest && <div className="animate__animated animate__flipInY addQuest">
         <form onSubmit={handleSubmit(addCard)}>
           
         <input {...register('question')} placeholder='введите вопрос' type="text"/>
         <input {...register('answer')} placeholder='введите ответ' type="text"/>
         <button className="button btn btn-success" >добавить</button>
         </form></div>}
     {renTitle ? <div className='editButton' >
       <h2>{state.deckReducer.editedDeck.title}</h2>
       <button className="button btn btn-success" onClick={(pre) => setRenTitle(!pre)}>изменить название колоды</button>
      <div> <button className="button btn btn-dark" onClick={()=>setAddQuest(true)}>добавить карточку</button></div>
       </div>
      :<form onSubmit={renameTitleDeck}>
      <input name='title' placeholder={state.deckReducer.editedDeck.title}/>
      <button className="btn btn-success">OK</button>
      </form>}
       </div>
       <div style={{height:'10px'}}></div>
       <div className='button2'>
         <button onClick={() => history.push('/account')} 
         className='button btn btn-success'>Выйти</button>
         {/* <button onClick={() => saveDeck(state.deckReducer.editedDeck)} className='button btn btn-dark'>Выйти с сохранением изменений</button> */}
       </div>
       <div style={{height:'10px'}}></div>
     <div className='button3'>
       {state.deckReducer.editedDeck.cards.map((el) => <Card  card={el}/>)}
     </div>


    </div>
  );
}

export default Edit;
