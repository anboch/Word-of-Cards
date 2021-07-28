import React,{useState} from 'react';
import {CardType} from '../../redux/types/card/cardTypes'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import {deleteCardSagaAC} from '../../redux/ActionCreators/Card/delCard'
import {useForm} from 'react-hook-form'
import {renameCardSagaAC} from '../../redux/ActionCreators/Card/renCard'

function Card({card}: {card:any}) {
const {register,handleSubmit} = useForm()
const [inpState , setIntState] = useState(true)
const dispatch = useDispatch()

const renameCard = (e:any) => {
  const _id = card._id
setIntState((pre) => !pre)
dispatch(renameCardSagaAC(_id,e.question,e.answer))
}

const deleteCard = (id:string) => {
dispatch(deleteCardSagaAC(id))
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
      </div>:<form onSubmit={() => handleSubmit(renameCard)}>
        <input {...register('question')} placeholder={card.question}  />
        <input {...register('answer')} placeholder={card.answer}  />
        <button className="button btn btn-dark"> OK </button>
      </form>}
      
    </div>
  );
}

export default Card;
