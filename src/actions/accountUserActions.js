import actionConstants from '../actionConstants';
import { get, post, put, _delete } from './RequestAdapter';

export const accountUserActions = {
  getAccount,
  putAccount,
  postAccount,
  delAccount,
};

function getAccount(token) {
  return async (dispatch, getState) => {
    dispatch({ type: actionConstants.START_QUERY });
    const params = {
      token,
    };
    await get(`account/info`, params)
      .then((res) => {
        dispatch({
          type: actionConstants.GET_ACCOUNT_SUCCESS,
          data: res.data,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionConstants.GET_ACCOUNT_FAILURE,
          data: error.message,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      });
  };
}

function postAccount(token, data) {
  return async (dispatch, getState) => {
    dispatch({ type: actionConstants.START_QUERY });
    const params = {
      token,
      body: data,
    };
    await post(`account`, params)
      .then((resp) => {
        dispatch({
          type: actionConstants.POST_ACCOUNT_SUCCESS,
          data: resp.data,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionConstants.POST_ACCOUNT_FAILURE,
          data: error.message,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      });
  };
}

function putAccount(token, id, newData) {
  return async (dispatch, getState) => {
    dispatch({ type: actionConstants.START_QUERY });
    const params = {
      token,
      body: newData,
    };
    await put(`account/${id}`, params)
      .then((resp) => {
        dispatch({
          type: actionConstants.EDIT_ACCOUNT_SUCCESS,
          data: resp.data,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionConstants.EDIT_ACCOUNT_FAILURE,
          data: error.message,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      });
  };
}

function delAccount(token, id) {
  return async (dispatch, getState) => {
    dispatch({ type: actionConstants.START_QUERY });
    const params = {
      token,
    };
    await _delete(`account/${id}`, params)
      .then((resp) => {
        dispatch({
          type: actionConstants.DEL_ACCOUNT_SUCCESS,
          data: resp.data,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionConstants.DEL_ACCOUNT_FAILURE,
          data: error.message,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      });
  };
}
