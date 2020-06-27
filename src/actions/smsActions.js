import  actionConstants  from '../actionConstants'
import axios from 'axios';
import { URL } from '../utils/config';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"

const headers = { headers: {
    'Authorization': token
   }
}

export const smsActions =  {
    getSMSActionAll,
    getSMSActionDetail, 
    putSMSAction, 

} 

function getSMSActionAll(){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/sms?_sort=-createdAt,-amount&_limit=3&_skip=0`,headers )
        .then(res => {
            console.log(res)
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
                type: actionConstants. GET_FAILURE_SMS,
                data: error.message,            
            })
        })
    }
}


function getSMSActionDetail(id){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/sms/:${id}`,headers )
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.GET_SUCCESS_SMS_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants. GET_FAILURE_SMS_DETAIL,
                data: error.message,            
            })
        })
    }
}

function putSMSAction(id){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/sms/:${id}`,headers )
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.PUT_SUCCESS_SMS_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants. PUT_FAILURE_SMS_DETAIL,
                data: error.message,            
            })
        })
    }
}

