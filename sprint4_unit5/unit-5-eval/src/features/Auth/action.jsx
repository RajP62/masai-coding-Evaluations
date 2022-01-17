import { LOGIN_USER_FAIL, LOGIN_USER_LOADING,LOGIN_USER_SUCCESS } from "./actionTypes"

export const loginSuccess = (payload)=>{
    return {type: LOGIN_USER_SUCCESS, payload} 
}

export const loginFailure = ()=>{
    return {type: LOGIN_USER_FAIL}
}

export const loginLoading = ()=>{
    return {type: LOGIN_USER_LOADING}
}
// I am not doing it from json-server as it will take alot of time to make requests although i had created the basic registration system but now i am using reqres directly
