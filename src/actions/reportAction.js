import  actionConstants  from '../actionConstants'
import axios from 'axios';
import { URL } from '../utils/config';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"

const headers = { headers: {
    'Authorization': token
   }
}



export const reportAction =  {
    getReportAction
} 


function getReportAction(){
    return(dispatch, getState) => {
        dispatch({type: actionConstants.START_QUERY});
        axios.get(`${URL}/report?_t=w`, headers)
        .then(res => {
            dispatch({
                type: actionConstants.END_QUERY
            });
            return dispatch({
                type: actionConstants.GET_SUCCESS_REPORT,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionConstants.END_QUERY,
            });
            return dispatch({
                type: actionConstants. GET_FAILURE_REPORT,
                data: error.message,            
            })
        })
    }
}


