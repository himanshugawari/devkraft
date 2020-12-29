import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const state = useSelector((state) => state);
  const currentUser = state.users.find(
    (user) => user.email === state.auth.email
  );
  const history = useHistory();

  return (
    <div>
      {Object.keys(state.auth).length === 0 ? (
        history.push('/login')
      ) : (
        <Fragment>
          <div className='card grid-2'>
            <div className='all-center'>
              <img
                src={currentUser.img}
                className='round-img'
                alt=''
                style={{ width: '150px' }}
              />
              <h1>
                <strong>Name : </strong>
                {currentUser.name}
              </h1>
            </div>
            <div>
              <h2>
                <strong>Email : </strong>
                {currentUser.email}
              </h2>
              <h2>
                <strong>DOB : </strong>
                {currentUser.dob}
              </h2>
              <h2>
                <strong>Gender : </strong>
                {currentUser.gender}
              </h2>
              <h2>
                <strong>Phone : </strong>
                {currentUser.phone}
              </h2>
              <h2>
                <strong>Address : </strong>
                {currentUser.address}
              </h2>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
