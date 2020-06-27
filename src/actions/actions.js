
import {services} from '../services/services'
import {actionTypes} from './actionTypes'


export const actions = {
    getSMSActionAll,
    getSMSActionDetail, 
    putSMSAction, 

    getAccountAction, 
    postAccountAction,
    putAccountAction, 
    delAccountAction,

    getReportAction
} 

//sms
function getSMSActionAll(){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.getSMS()
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.GET_SUCCESS_SMS,
                data: res.data,
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. GET_FAILURE_SMS,
                data: error.message,            
            })
        })
    }
}


function getSMSActionDetail(id){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.getSMSDetail(id)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.GET_SUCCESS_SMS_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. GET_FAILURE_SMS_DETAIL,
                data: error.message,            
            })
        })
    }
}

function putSMSAction(id){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.putSMSDetail(id)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.PUT_SUCCESS_SMS_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. PUT_FAILURE_SMS_DETAIL,
                data: error.message,            
            })
        })
    }
}

//account

function getAccountAction(){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.getAccount()
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.GET_SUCCESS_ACCOUNT,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. GET_FAILURE_ACCOUNT,
                data: error.message,            
            })
        })
    }
}

function postAccountAction(){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.postAccountDetail()
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.POST_SUCCESS_ACCOUNT,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. POST_FAILURE_ACCOUNT,
                data: error.message,            
            })
        })
    }
}

function putAccountAction(id){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.putAccountDetail(id)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.PUT_SUCCESS_ACCOUNT_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. PUT_FAILURE_ACCOUNT_DETAIL,
                data: error.message,            
            })
        })
    }
}
function delAccountAction(id){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.delAccountDetail(id)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.DEL_SUCCESS_ACCOUNT_DETAIL,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. DEL_FAILURE_ACCOUNT_DETAIL,
                data: error.message,            
            })
        })
    }
}

//dashbord


function getReportAction(){
    return(dispatch, getState) => {
        dispatch({type: actionTypes.START_QUERY});
        services.getReport()
        .then(res => {
            console.log(res.data)
            dispatch({
                type: actionTypes.END_QUERY
            });
            return dispatch({
                type: actionTypes.GET_SUCCESS_DASHBOARD,
                data: res.data,
                
            
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.END_QUERY,
            });
            return dispatch({
                type: actionTypes. GET_FAILURE_DASHBOARD,
                data: error.message,            
            })
        })
    }
}



