import actionConstants from '../actionConstants';
const initState = {
  loading: false,
  accountUser: {},
  getAllAccountError: '',
  isPosted: false,
  isEdited: false,
  isDeleted: false,
  editPassword: {},
};

export default (state = initState, action) => {
  const _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.START_QUERY:
      _state.loading = true;
      _state.getAllAccountError = '';
      _state.isPosted = false;
      _state.isEdited = false;
      _state.isDeleted = false;
      return _state;
    case actionConstants.END_QUERY:
      _state.loading = false;
      _state.isPosted = false;
      _state.isEdited = false;
      _state.isDeleted = false;
      return _state;
    case actionConstants.GET_ACCOUNT_SUCCESS:
      _state.accountUser = action.data;
      return _state;
    case actionConstants.GET_ACCOUNT_FAILURE:
      _state.getAllAccountError = action.data;
      return _state;
    case actionConstants.POST_ACCOUNT_SUCCESS:
      _state.isPosted = true;
    case actionConstants.POST_ACCOUNT_FAILURE:
      _state.postAccountError = action.data;
    case actionConstants.EDIT_ACCOUNT_SUCCESS:
      _state.isEdited = true;
    case actionConstants.EDIT_ACCOUNT_FAILURE:
      _state.editAccountError = action.data;
    case actionConstants.DEL_ACCOUNT_SUCCESS:
      _state.isDeleted = true;
    case actionConstants.DEL_ACCOUNT_FAILURE:
      _state.delAccountError = action.data;
    case actionConstants.EDIT_PASSWORD_SUCCESS:
      _state.editPassword = true;
    case actionConstants.EDIT_PASSWORD_FAILURE:
      _state.delAccountError = action.data;
    case actionConstants.RESET_PASSWORD_SUCCESS:
      _state.resetPassword = true;
    case actionConstants.RESET_PASSWORD_FAILURE:
      _state.delAccountError = action.data;
    default:
      return _state;
  }
};
