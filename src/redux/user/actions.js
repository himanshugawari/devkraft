import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ALERT,
} from './actionTypes';

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (auth) => {
  return {
    type: LOGIN_SUCCESS,
    payload: auth,
  };
};

const loginFailure = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

const registerFail = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
};

const alert = (error) => {
  return {
    type: ALERT,
    payload: error,
  };
};

const actions = {
  authLogin: (auth) => {
    return (dispatch) => {
      try {
        dispatch(loginRequest());
        dispatch(loginSuccess(auth));
      } catch (error) {
        dispatch(loginFailure(error));
      }
    };
  },
  authLogout: () => {
    return (dispatch) => {
      dispatch(logout());
    };
  },
  registerUser: (user) => {
    return (dispatch) => {
      try {
        dispatch(registerRequest());
        dispatch(registerSuccess(user));
      } catch (error) {
        dispatch(registerFail(error));
      }
    };
  },
  error: (error) => {
    return (dispatch) => {
      dispatch(alert(error));
    };
  },
};

export { actions };
