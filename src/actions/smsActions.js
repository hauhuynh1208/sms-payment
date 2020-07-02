import  actionConstants  from '../actionConstants'
import axios from 'axios';
import { URL, headers } from '../utils/config';

export const smsActions =  {
    getSMSActionAll,
} 

function getSMSActionAll(){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/sms?_sort=-createdAt,-amount&_limit=3&_skip=0`,headers )
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.GET_SUCCESS_SMS,
                data: res.data,
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants.GET_FAILURE_SMS,
                data: error.message,            
            })
        })
    }
}

