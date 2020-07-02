import actionConstants from '../actionConstants';
import { get, put } from './RequestAdapter';

export const smsActions = {
  getAllSMS,
  editSMS,
};

function getAllSMS(token) {
  return async (dispatch, getState) => {
    dispatch({ type: actionConstants.START_QUERY });
    const params = {
      token,
    };
    await get(`sms?_sort=-createdAt,-amount&_limit=3&_skip=0`, params)
      .then((resp) => {
        dispatch({
          type: actionConstants.GET_SUCCESS_SMS,
          data: resp.data,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionConstants.GET_FAILURE_SMS,
          data: error.message,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      });
  };
}

function editSMS(token, { _id, status, note }) {
  return async (dispatch, getState) => {
    dispatch({ type: actionConstants.START_QUERY });
    const params = {
      token,
      body: {
        status,
        note,
      },
    };
    await put(`sms/${_id}`, params)
      .then((resp) => {
        dispatch({
          type: actionConstants.EDIT_SMS_SUCCESS,
          data: resp.data,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionConstants.EDIT_SMS_FAILURE,
          data: error.message,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      });
  };
}
