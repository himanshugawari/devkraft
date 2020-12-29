import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userActions } from '../../../redux/user';
import { emailVerification } from '../../utils';

const initialState = { email: '', password: '' };

const Login = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  const [auth, setAuth] = useState(initialState);
  const userDispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setAuth((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailVerification(auth.email)) {
      const found = state.users.find(
        (element) =>
          element.email === auth.email && element.password === auth.password
      );
      if (found) {
        userDispatch(userActions.error(''));
        userDispatch(userActions.authLogin(auth));
        history.push('/');
      } else {
        userDispatch(userActions.error('user not found'));
      }
    } else {
      userDispatch(userActions.error('Login failure'));
    }
    setAuth({ email: '', password: '' });
  };

  return (
    <div className='form-container'>
      <h1>
        User <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={auth.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={auth.password}
            onChange={handleChange}
            required
            minLength='8'
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
