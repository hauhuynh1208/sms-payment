import actionConstants from '../actionConstants';

const initState = {
  loading: false,
  reports: [],
  error: '',
};

const getReportReducer = (state = initState, action) => {
  var _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.START_QUERY:
      _state.loading = true;
      _state.error = '';
      return _state;
    case actionConstants.END_QUERY:
      _state.loading = false;
      return _state;
    case actionConstants.GET_SUCCESS_REPORT:
      _state.reports = action.data;
      return _state;
    case actionConstants.GET_FAILURE_REPORT:
      _state.error = action.data;
      return _state;
    default:
      return _state;
  }
};

export const reportReducers = {
  getReportReducer,
};
