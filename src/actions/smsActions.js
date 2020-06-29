import  actionConstants  from '../actionConstants'
import axios from 'axios';
import { URL } from '../utils/config';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTMzMTI0NTAsImV4cCI6MTU5MzkxNzI1MH0.7zCw28lP4ffCje2NhaljyRr1sxhJGuAbXkF-zp2N57U"

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

function putSMSAction(id,code){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.put(`${URL}/sms/:${id}`,headers, {body : code} )
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

