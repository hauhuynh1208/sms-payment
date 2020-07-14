import actionConstants from '../actionConstants';
import { get } from './RequestAdapter';

export const reportActions = {
  getReports,
};

function getReports(token, _t = 'w') {
  return async (dispatch, getState) => {
    dispatch({ type: actionConstants.START_QUERY });
    const params = {
      token,
    };
    await get(`report?_t=${_t}`, params)
      .then((resp) => {
        dispatch({
          type: actionConstants.GET_SUCCESS_REPORT,
          data: resp.data,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionConstants.GET_FAILURE_REPORT,
          data: error.message,
        });
        return dispatch({
          type: actionConstants.END_QUERY,
        });
      });
  };
}
