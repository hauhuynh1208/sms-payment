import  actionConstants  from '../actionConstants'
import axios from 'axios';
import { URL, headers } from '../utils/config';

export const reportActions =  {
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


