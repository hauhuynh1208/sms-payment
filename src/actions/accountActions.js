import actionConstants from '../actionConstants'
import {get, post} from './RequestAdapter'
import {history} from '../utils/history'

export default {
    login,
}

function login({email, password}) {
    return async (dispatch)=>{
        dispatch({type: actionConstants.START_QUERY})
        const params = {
            body: {
              email,
              password,
            },
          };
        await post('login', params).then(resp=>{
                sessionStorage.setItem('userInfo', JSON.stringify(resp.data));
                dispatch({
                    type: actionConstants.LOGIN_SUCCESS,
                    data: resp.data
                })
                dispatch({type: actionConstants.END_QUERY})
            }).then(()=>history.push('/'))
            .catch(err=>{
                console.log(err)
                dispatch({
                    type: actionConstants.LOGIN_FAILURE,
                    data: err.message
                })
                return dispatch({type: actionConstants.END_QUERY})
            })
    }
}