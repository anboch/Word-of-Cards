import React,{useState} from 'react';
import {CardType} from '../../redux/types/card/cardTypes'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';

function Card({card}: {card:any}) {
const [inpState , setIntState] = useState(true)
const dispatch = useDispatch()

const renameQuestion = (e:any) => {
e.preventDefault()
dispatch({type:'RENAME_QUESTION_CARD',payload:e.target.quest.value})
dispatch({type:'RENAME_ANSVER_CARD',payload:e.target.ansver.value})
}

const deleteCard = (id:string) => {
dispatch({type:'DELETE_CARD', payload:id})
}


  return (
   
    <div className='cardDiv' style={{marginLeft:'175px'}}>
      <div className='titleDiv'>
     <p> {card.question}</p>
      <p>{card.answer}</p>
      </div>
     {inpState ? <div className='buttonsDiv'>
      <button type="button" className="button btn btn-success" onClick={()=>setIntState((pre)=>!pre)}>редактировать вопрос и ответ</button>
      <button type="button" className="button btn btn-dark" onClick={()=>deleteCard(card._id)} >удалить карточку</button>
      </div>:<form onSubmit={(e) => renameQuestion(e)}>
        <input placeholder={card.question} name='quest' />
        <input placeholder={card.answer} name='ansver' />
        <button className="button btn btn-dark">OK</button>
      </form>}
      
    </div>
  );
}

export default Card;
