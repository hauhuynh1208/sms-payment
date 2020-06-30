import { combineReducers } from 'redux';
import accountReducers from './accountReducers'
import { smsReducers } from './smsReducers'
import { accountUserReducers } from './accountUserReducers'
import { reportReducers } from './reportReducers'
export default combineReducers({
  account: accountReducers,
  sms: smsReducers.getSMSReducer,
  accountUser : accountUserReducers.getAccountReducer,
  report: reportReducers.getReportReducer
});
