import actionConstants from '../actionConstants';

const initState = {
  loading: false,
  sms: [],
  getAllSMSError: '',
  isEdited: false,
};

export default (state = initState, action) => {
  const _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.START_QUERY:
      _state.loading = true;
      _state.getAllSMSError = '';
      _state.isEdited = false;
      return _state;
    case actionConstants.END_QUERY:
      _state.loading = false;
      _state.isEdited = false;
      return _state;
    case actionConstants.GET_SUCCESS_SMS:
      _state.sms = action.data;
      return _state;
    case actionConstants.GET_FAILURE_SMS:
      _state.getAllSMSError = action.data;
      return _state;
    case actionConstants.EDIT_SMS_SUCCESS:
      _state.isEdited = true;
      return _state;
    case actionConstants.EDIT_SMS_FAILURE:
      _state.editSMSError = action.data;
      return _state;
    default:
      return _state;
  }
};
