import React from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserSagaAC } from '../../redux/ActionCreators/User/loginUserAC';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { State } from '../../redux/types/index';
import useSound from 'use-sound';
import { Button, Form } from 'react-bootstrap';
// import musicTrue from '../../volue/good.mp3'

function Login() {
  // const [playTrue] = useSound(
  //   musicTrue,
  //   { volume: 0.25 })
  const history = useHistory();
  const state = useSelector((state: State) => state);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const loginUser = (event: { login: string; password: string }) => {
    const login = event.login;
    console.log('login:', login);
    const password = event.password;
    console.log('password:', password);
    dispatch(loginUserSagaAC(login, password));
  };
  state.userReducer.user._id && /*playTrue()|| */ history.push('/account');
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: '30px' }}
    >
      {/* <div className="divLogin animate__animated animate__flipInY">
        <form onSubmit={handleSubmit(loginUser)}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Login</label>
            <div style={{ maxWidth: '400px' }} className="col-sm-10">
              <input
                {...register('login')}
                required
                name="login"
                type="string"
                className="form-control"
                id="inputEmail3"
              />
            </div>
          </div>
          <div className="row mb-2">
            <label className="col-sm-2 col-form-label">Password</label>
            <div style={{ maxWidth: '400px' }} className="col-sm-10">
              <input
                {...register('password')}
                required
                name="password"
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <button className="btn btn-primary animate__animated animate__lightSpeedInRight">
            Login
          </button>
        </form>
      </div> */}
      <Form style={{ width: '20rem' }} onSubmit={handleSubmit(loginUser)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя/логин</Form.Label>
          <Form.Control
            {...register('login')}
            required
            name="login"
            type="string"
            className="form-control"
            id="inputEmail3"
            placeholder="Имя/логин"
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            {...register('password')}
            required
            name="password"
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Пароль"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  );
}

export default Login;
