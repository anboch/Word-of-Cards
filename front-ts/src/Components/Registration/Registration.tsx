import React from 'react';
import './Registration.css';
import { useDispatch } from 'react-redux';
import { addUserSagaAC } from '../../redux/ActionCreators/User/addUserAC';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Registration() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handlerUser = (event: any) => {
    const login = event.login;
    const email = event.email;
    const password = event.password;
    dispatch(addUserSagaAC(login, email, password));
    history.push('/account');
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: '30px' }}
    >
      {/* <div className="divRegistration animate__animated animate__flipInY">
        <form className="tilt-in-fwd-tr" onSubmit={handleSubmit(handlerUser)}>
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
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email</label>
            <div style={{ maxWidth: '400px' }} className="col-sm-10">
              <input
                {...register('email')}
                required
                name="email"
                type="email"
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
            Registration
          </button>
        </form>
      </div> */}
      <Form style={{ width: '20rem' }} onSubmit={handleSubmit(handlerUser)}>
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register('email')}
            required
            name="email"
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
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
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}

export default Registration;
