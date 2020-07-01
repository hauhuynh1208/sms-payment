import actionConstants from '../actionConstants'

const getReportReducer = (state = [], action) => {

var _state = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case actionConstants.GET_SUCCESS_REPORT:
      _state = action.data;
      return _state;
    case actionConstants.GET_FAILURE_REPORT:
      return _state;
    default:
      return _state;
  }
};

export const reportReducers = {
  getReportReducer
}
