import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../../redux/user';

const Navbar = ({ title }) => {
  const state = useSelector((state) => state);
  const userDispatch = useDispatch();

  const Logout = () => {
    userDispatch(userActions.authLogout());
  };

  const authLinks = (
    <Fragment>
      <li>Hello {state.auth.email}</li>
      <li>
        <a onClick={Logout} href='#!'>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>Hello Guest</li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
      <ul>{Object.keys(state.auth).length >= 1 ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Users',
};

export default Navbar;
