import { combineReducers } from 'redux';
import accountReducers from './accountReducers'
import {reducers} from '../reducer/reducer'


export default combineReducers({
  account: accountReducers,
  sms: reducers.getSMSReducer,
  accountUser : reducers.getAccountReducer,
  report: reducers.getReportReducer
});
