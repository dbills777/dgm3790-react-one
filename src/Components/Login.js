import React, { useState } from 'react';
import { useLoginContext } from '../contexts/LoginContext';
import  image  from '../images/pollos.png';

import './Login.css';

const LoginForm = (props) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [member, setMember] = useState('');
  const authContext = useLoginContext();

  const submitHandler = (event) => {
    event.preventDefault();
    setMember({ first_name: first_name, last_name: last_name, email: email });
    authContext.login();
    authContext.setName(first_name);
  };

  console.log(member, first_name);
  return !authContext.isAuth ? (
    <div className='container'>
      <div>
        <img src={image} alt = 'img'></img>
      </div>

      <section className='signup-form'>
        <p className='mail'>Sign Up For Our Mailing List</p>
        <form onSubmit={submitHandler} autoComplete='off'>
          <div className='form-control'>
            <label htmlFor='firstname'>Firts Name</label>
            <input
              type='text'
              id='firstName'
              value={first_name}
              required
              placeholder='Required'
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='lastname'>Lastname</label>
            <input
              type='text'
              id='lastName'
              value={last_name}
              required
              placeholder='Required'
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              required
              placeholder='Required'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className='signup-button'>
            <button className='btn' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  ) : (
    <h1>
      Hello {authContext.name}! Thank You, You Are Signed up for our Mailing
      List
    </h1>
  );
};

export default LoginForm;
