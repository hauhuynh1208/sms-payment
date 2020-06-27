import actionConstants from '../actionConstants'

const getSMSReducer = (state = [], action) => {

    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.GET_SUCCESS_SMS:
        _state = action.data;
        return _state;
      case actionConstants.GET_FAILURE_SMS:
        return _state;
      default:
        return _state;
    }
  };

  const getSMSDetailReducer = (state = [], action) => {

    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.GET_SUCCESS_SMS_DETAIL:
        _state = action.data;
        return _state;
      case actionConstants.GET_FAILURE_SMS_DETAIL:
        return _state;
      default:
        return _state;
    }
  };

  const putSMSDetailReducer = (state = [], action) => {

    var _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case actionConstants.PUT_SUCCESS_SMS_DETAIL:
        _state = action.data;
        return _state;
      case actionConstants.PUT_FAILURE_SMS_DETAIL:
        return _state;
      default:
        return _state;
    }
  };


  //account

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

//dashboard


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

export const reducers = {
  getSMSReducer,
  getSMSDetailReducer,
  putSMSDetailReducer,

  getAccountReducer,
  postAccountReducer,
  putAccountReducer,
  delAccountReducer,
  
  getReportReducer


}
