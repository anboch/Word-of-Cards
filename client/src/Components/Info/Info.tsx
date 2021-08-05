import React from 'react';
import {Link} from 'react-router-dom'
import './Info.css'

function Info() {
  return (
    <div className='infoDiv'>
       
      <Link to='/'>Home</Link>
     <h5 style={{margin:'100px 50px 50px 50px'}}>Данная игра предназначена для тренировку памяти,
       а так же приятного время провождения!</h5>


      <p>Проэкт разработали </p>
      <p>Андрей Бочка  &&  Грант Чобанян</p>
  
    
     
    </div>
  );
}

export default Info;
