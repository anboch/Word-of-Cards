import React from "react";
import "./Registration.css";
import { useDispatch} from "react-redux";
import {addUserSagaAC} from '../../redux/ActionCreators/User/addUserAC'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'

function Registration() {
  const history = useHistory()
const {register,handleSubmit} = useForm()
const dispatch = useDispatch()

  const handlerUser = (event:any) => {
    // event.preventDefault()
    const login = event.login
     const  email = event.email
       const password = event.password
       dispatch(addUserSagaAC(login,email,password))
       history.push('/account')
  }

  return (
    <div className="divRegistration">
      <form onSubmit={handleSubmit(handlerUser)}>
        <div className="row mb-3">
          <label  className="col-sm-2 col-form-label">
            Login
          </label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input {...register('login')}
              required
              name="login"
              type="string"
              className="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label  className="col-sm-2 col-form-label">
            Email
          </label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input {...register('email')}
              required
              name="email"
              type="email"
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
            <input {...register('password')}
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
