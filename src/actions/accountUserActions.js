import actionConstants from '../actionConstants'
import { URL, headers } from '../utils/config';
import axios from 'axios';

export const accountUserActions = {
    getAccountAction,
}

function getAccountAction(){
    console.log(headers, 'header')
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/account/info`, headers)
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.GET_SUCCESS_ACCOUNT,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants.GET_FAILURE_ACCOUNT,
                data: error.message,            
            })
        })
    }
}
