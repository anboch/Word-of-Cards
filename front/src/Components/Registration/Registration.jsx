import React from "react";
import "./Registration.css";
import { useDispatch, useSelector } from "react-redux";
import {addUserSagaAC} from '../../redux/ActionCreators'

function Registration(props) {

const dispatch = useDispatch()

  const handlerUser = (event) => {
    event.preventDefault()
    const login = event.target.login.value
     const  email = event.target.email.value
       const password = event.target.password.value
       dispatch(addUserSagaAC({login,email,password}))
       
  }

  return (
    <div className="divRegistration">
      <form onSubmit={handlerUser}>
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
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              required
              name="email"
              type="email"
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
        <button className="btn btn-primary">Registration</button>
      </form>
    </div>
  );
}

export default Registration;
