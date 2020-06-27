import { combineReducers } from 'redux'
import {reducers} from './reducer'

const combineReducer = combineReducers({
    sms: reducers.getSMSReducer,
    account : reducers.getAccountReducer,
    report: reducers.getReportReducer
})

export default combineReducer