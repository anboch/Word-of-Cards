import React from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import {loginUserSagaAC} from '../../redux/ActionCreators'

function Login(props) {
const dispatch = useDispatch()
const loginUser = (event) => {
  event.preventDefault()
const login = event.target.login.value
const password = event.target.password.value
dispatch(loginUserSagaAC({login,password}))
}

  return (
    <div className="divLogin">
      <form onSubmit={loginUser}>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Login
          </label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              required
              name="login"
              type="string"
              className="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-2">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              required
              name="password"
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
