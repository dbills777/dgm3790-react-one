import React, { useState } from 'react';

import './Login.css';

const IngredientForm = React.memo((props) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail]= useState('')
  const [member, setMember] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    setMember({ first_name: first_name, last_name: last_name, email: email });
    console.log('submitted')
  };
  console.log(member)
  return (
    <div className='container'>
      <p>Mailing List Form</p>
      <section className='signup-form'>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Firts Name</label>
            <input
              type='text'
              id='firstName'
              value={first_name}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='title'>Lastname</label>
            <input
              type='text'
              id='lastName'
              value={last_name}
              required
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className='signup-button'>
            <button className='btn' type='submit'>
              Join
            </button>
          </div>
        </form>
      </section>
    </div>
  );
});

export default IngredientForm;
