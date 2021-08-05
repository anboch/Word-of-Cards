import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import useSound from 'use-sound';
import { State } from '../../redux/types';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Button, Container } from 'react-bootstrap';

// import musicGrom from '../../volue/mol.mp3'

function Home() {
  // const myRef = useRef(null);
  // const executeScroll = () => {
  //   if (myRef) {
  //     myRef.current.scrollIntoView();
  //   }
  // };
  // const [playGrom] = useSound(
  //   musicGrom,
  //   { volume: 0.2 }
  // );
  // playGrom()
  const history = useHistory();
  const state = useSelector((state: State) => state);
  state.userReducer.user._id && /*playTrue()|| */ history.push('/account');

  return (
    <div className="bigDiv">
      <Container className="homeContainer">
        <div className="home">
          <div className="titleAndImg">
            <div className="titleGroup">
              <h1 className="title">World Of Cards</h1>
              <h4 className="title">
                <span>выучи что угодно с </span>
                <br />
                <span>помощью карточек</span>
              </h4>
              <Button
                onClick={() => history.push('/signup')}
                className="btnStart"
                variant="success"
              >
                Начать
              </Button>
              {/* <br />
              <Button
                // onClick={executeScroll}
                className="btnAdditionally"
                variant="secondary"
              >
                Подробнее
              </Button> */}
            </div>
            <div>
              <img className="bigLogo" src="/logoCards.png" alt="" />
            </div>
          </div>
          {/* ref={myRef} */}
          <div className="advantages">
            <div className="advantage">
              <img className="advantageImg" src="/list.svg" alt="" />
              <span className="advantageTitle">Научно доказанная методика</span>
            </div>
            <div className="advantage">
              <img className="advantageImg" src="/stock.svg" alt="" />
              <span className="advantageTitle">
                Максимальная эффективность запоминания
              </span>
            </div>
            <div className="advantage">
              <img className="advantageImg" src="/hand.svg" alt="" />
              <span className="advantageTitle">Просто и удобно</span>
            </div>
            <div className="advantage">
              <img className="advantageImg" src="/phone.svg" alt="" />
              <span className="advantageTitle">Всегда под рукой</span>
            </div>
          </div>
          <div className="aboutMethod">
            <div className="titleMethod">
              <h2>Метод интервальных повторений</h2>
            </div>
            <div className="discAndImgMethod">
              <div className="description">
                <p>
                  Метод основан на принципе мозга хорошо запоминать информацию,
                  которую периодически нужно вспомнить.
                </p>
                <p>
                  Основное преимущество в том, что подбираются оптимальные
                  промежутки для повторения.
                </p>
                <p>
                  Результат: максимальное количество изученного за минимальное
                  количество потраченного времени.
                </p>
              </div>
              <div>
                <img className="imgAboutMethod" src="/aboutMethod.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="advantagesApp">
            <div className="advantageApp">
              <img className="advantageAppImg" src="/decks.png" alt="" />
              <span className="advantageAppTitle">
                Создавайте свои или копируйте публичные колоды
              </span>
            </div>
            <div className="advantageApp">
              <span className="advantageAppTitle">
                Интервалы повторений подстраиваются под Ваш прогресс
              </span>
              <img className="advantageAppImg" src="/cards.png" alt="" />
            </div>
          </div>
        </div>
        <div className="btnsBottom">
          <Button
            onClick={() => history.push('/signup')}
            className="btnStart2"
            variant="success"
          >
            Начать
          </Button>
          <br />
          <Button
            onClick={() => history.push('/public')}
            className="btnPublic"
            variant="secondary"
          >
            Публичные колоды
          </Button>
        </div>
      </Container>
      {/* <CSSTransition transitionName='page' timeout={10000} onmountexit >
     <div className='litlDiv page'>Word of Cards   </div>
     </CSSTransition> */}

      <div></div>
    </div>
  );
}

export default Home;
