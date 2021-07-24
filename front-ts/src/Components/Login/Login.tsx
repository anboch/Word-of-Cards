import React from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import {loginUserSagaAC} from '../../redux/ActionCreators/User/loginUserAC'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {State} from '../../redux/types/index'

function Login() {
  const history = useHistory()
  const state = useSelector((state:State) => state)
  const {register,handleSubmit} = useForm()
const dispatch = useDispatch()

const loginUser = (event:{login:string,password:string}) => {

const login = event.login
const password = event.password
dispatch(loginUserSagaAC(login,password))
}
state.userReducer.user._id && history.push('/account')
  return (
    <div className="divLogin animate__animated animate__flipInY">
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="row mb-3">
          <label  className="col-sm-2 col-form-label">
            Login
          </label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
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
          <label  className="col-sm-2 col-form-label">
            Password
          </label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
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
        <button className="btn btn-primary animate__animated animate__lightSpeedInRight">Login</button>
      </form>
    </div>
  );
}

export default Login;
