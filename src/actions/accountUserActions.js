import actionConstants from '../actionConstants'
import { URL } from '../utils/config';
import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"

const headers = { headers: {
    'Authorization': token
   }
}


export const accountUserActions = {
    getAccountAction,
    postAccountAction,
    putAccountAction,
    delAccountAction

}




function getAccountAction(){
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
                type: actionConstants. GET_FAILURE_ACCOUNT,
                data: error.message,            
            })
        })
    }
}

function postAccountAction(){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/account`, headers)
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.POST_SUCCESS_ACCOUNT,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants. POST_FAILURE_ACCOUNT,
                data: error.message,            
            })
        })
    }
}

function putAccountAction(id){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/account/:${id}`, headers)
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.PUT_SUCCESS_ACCOUNT_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants. PUT_FAILURE_ACCOUNT_DETAIL,
                data: error.message,            
            })
        })
    }
}
function delAccountAction(id){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/account/:${id}`, headers)
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.DEL_SUCCESS_ACCOUNT_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants. DEL_FAILURE_ACCOUNT_DETAIL,
                data: error.message,            
            })
        })
    }
}

