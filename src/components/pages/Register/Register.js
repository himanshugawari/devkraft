import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../redux/user';
import { convertImage, nameVerification } from '../../utils';

const { registerUser } = userActions;

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  gender: 'male',
  phone: '',
  dob: '',
  address: '',
  img: '',
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const userDispatch = useDispatch();

  const {
    name,
    email,
    password,
    password2,
    gender,
    phone,
    dob,
    address,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const imageUpload = (e) => {
    const file = e.target.files[0];
    var fileSize = file.size;
    if (fileSize > 500000) {
      userDispatch(userActions.error('Size limited to 500kb '));
    }
    convertImage(file).then((base64) => {
      setUser((prevState) => ({ ...prevState, img: base64 }));
      console.debug('file stored', base64);
    });
  };

  const nameChange = (e) => {
    if (nameVerification(e.target.value)) {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      userDispatch(userActions.error('Name Invalid'));
    }
  };

  const passwordChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      userDispatch(userActions.error('Passwords do not match'));
    } else {
      userDispatch(userActions.error(''));
      userDispatch(registerUser(user));
    }
    setUser(initialState);
  };

  return (
    <div className='form-container'>
      <h1>
        User <span className='text-primary'>Registeration</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='img'>Profile Picture</label>
          <input
            type='file'
            id='img'
            name='img'
            onChange={imageUpload}
            data-max-size='500'
            accept='image/jpg, image/jpeg, image/png'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={nameChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            id='phone'
            type='phone'
            name='phone'
            value={phone}
            onChange={onChange}
            required
            minLength='10'
            maxLength='10'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dob'>Date of birth</label>
          <input
            id='dob'
            type='date'
            name='dob'
            value={dob}
            onChange={onChange}
            required
            max={`${2020 - 18}-01-01`}
            min={`${2020 - 50}-01-01`}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='gender'>Gender</label>
          <br></br>
          <input
            id='gender'
            type='radio'
            name='gender'
            value='male'
            checked={gender === 'male'}
            onChange={onChange}
          />{' '}
          Male{' '}
          <input
            type='radio'
            name='gender'
            value='female'
            onChange={onChange}
          />{' '}
          Female{' '}
          <input type='radio' name='gender' value='other' onChange={onChange} />{' '}
          Other{' '}
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <textarea
            id='address'
            type='address'
            name='address'
            value={address}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={passwordChange}
            required
            minLength='8'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='8'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
