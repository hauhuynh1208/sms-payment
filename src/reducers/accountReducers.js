import   actionConstants  from '../actionConstants'

const initState = {
    loading: false,
    error: ''
}

export default (state = initState, action) => {
    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.START_QUERY:
        _state.loading = true;
        return _state;
      case actionConstants.END_QUERY:
        _state.loading = false;
        return _state;
      case actionConstants.LOGIN_SUCCESS:
        _state.userInfo = action.data;
        return _state;
      case actionConstants.LOGIN_FAILURE:
        _state.error = action.data;
        return _state;
      case actionConstants.LOGOUT_REQUEST:
        // _state = {};
        return _state;
      default:
        return _state;
    }
  };