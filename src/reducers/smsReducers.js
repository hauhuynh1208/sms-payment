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


export const smsReducers = {
  getSMSReducer,
  getSMSDetailReducer,
  putSMSDetailReducer
}
