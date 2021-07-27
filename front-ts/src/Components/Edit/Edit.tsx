import { rename } from 'fs';
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


function Edit() {
  const {register,handleSubmit} = useForm()
  const history = useHistory()
  const state = useSelector((state:State) => state)
  const dispatch = useDispatch()
  const [renTitle, setRenTitle] = useState(true)
  const [addQuest, setAddQuest] =useState(false)

 const renameTitleDeck =(e:any) => {
   e.preventDefault()
   dispatch({type:'RENAME_TITLE_DECK', payload:e.target.title.value})
   e.target.title.value=''
   setRenTitle((pre) => !pre)
 }

 const saveDeck = (deck:object) => {
dispatch(saveEditDeckSagaAC(deck))
 }

 const addCard = (event:any) => {
   setAddQuest(false)
   const question=event.question
   const answer=event.answer
   dispatch(addCardSagaAC(question,
  answer))

 }

  return (
    <div>
     <div>
       {addQuest && <div className="animate__animated animate__flipInY addQuest">
         <form onSubmit={handleSubmit(addCard)}>
           
         <input {...register('question')} placeholder='введите вопрос' type="text"/>
         <input {...register('answer')} placeholder='введите ответ' type="text"/>
         <button className="button btn btn-success" >добавить</button>
         </form></div>}
     {renTitle ? <div >
       <h2>{state.deckReducer.editedDeck.title}</h2>
       <button className="button btn btn-success" onClick={(pre) => setRenTitle(!pre)}>изменить название колоды</button>
      <div> <button className="button btn btn-dark" onClick={()=>setAddQuest(true)}>добавить карточку</button></div>
       </div>
      :<form onSubmit={renameTitleDeck}>
      <input name='title' placeholder='new title'/>
      <button className="btn btn-success">OK</button>
      </form>}
       </div>
       <div style={{height:'10px'}}></div>
       <div >
         <button onClick={() => history.push('/account')} 
         className='button btn btn-success'>Выйти без сохранения изменений</button>
         <button onClick={() => saveDeck(state.deckReducer.editedDeck)} className='button btn btn-dark'>Выйти с сохранением изменений</button>
       </div>
       <div style={{height:'10px'}}></div>
     <div>
       {state.deckReducer.editedDeck.cards.map((el) => <Card  card={el}/>)}
     </div>


    </div>
  );
}

export default Edit;
