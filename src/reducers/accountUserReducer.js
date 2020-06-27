import  actionConstants from '../actionConstants'


  const getAccountReducer = (state = [], action) => {

    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.GET_SUCCESS_ACCOUNT:
        _state = action.data;
        return _state;
      case actionConstants.GET_FAILURE_ACCOUNT:
        return _state;
      default:
        return _state;
    }
  };

  const postAccountReducer = (state = [], action) => {

    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.POST_SUCCESS_ACCOUNT:
        _state = action.data;
        return _state;
      case actionConstants.POST_FAILURE_ACCOUNT:
        return _state;
      default:
        return _state;
    }
  };


  const putAccountReducer = (state = [], action) => {

    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.PUT_SUCCESS_ACCOUNT_DETAIL:
        _state = action.data;
        return _state;
      case actionConstants.PUT_FAILURE_ACCOUNT_DETAIL:
        return _state;
      default:
        return _state;
    }
  };

  const delAccountReducer = (state = [], action) => {

    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.DEL_SUCCESS_ACCOUNT_DETAIL:
        _state = action.data;
        return _state;
      case actionConstants.DEL_FAILURE_ACCOUNT_DETAIL:
        return _state;
      default:
        return _state;
    }
  };

  
  export default {
    getAccountReducer,
    postAccountReducer,
    putAccountReducer,
    delAccountReducer
}
  