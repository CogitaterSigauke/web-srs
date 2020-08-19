import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED
} from '../types';
import axios from 'axios';

export const loginUser = (userData, history, tokenId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/signup', userData)
    .then((res) => {
      setAuthorizationHeader(tokenId);
      dispatch({
        type: SET_USER,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS });
      history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const signupUser = (newUserData, history, tokenId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/signup', newUserData)
    .then((res) => {
      setAuthorizationHeader(tokenId);
      dispatch({
        type: SET_USER,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS });
      history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getUserDetails = (userData) => (dispatch) => {

  dispatch({ type: LOADING_UI });
  axios
    .post('/signup', userData)
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('tokenId');

  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });

};

const setAuthorizationHeader = (token) => {
  const tokenId = `Bearer ${token}`;
  localStorage.setItem('tokenId', tokenId);
  axios.defaults.headers.common['Authorization'] = tokenId;
};
