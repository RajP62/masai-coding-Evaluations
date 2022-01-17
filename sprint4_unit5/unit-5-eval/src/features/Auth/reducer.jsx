import { loadData, saveData } from "../utils/localstorage";
import { LOGIN_USER_FAIL, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./actionTypes";

const initState = {
    admin: false,
    status: loadData("user_auth"),
    client : false,
    loading:false,
    error: false
}

export const authReducer = (state=initState, {type, payload})=>{
    switch(type){
        case LOGIN_USER_SUCCESS:
            const updated = {auth: true, token: payload.token}
            saveData("user_auth", updated)
            return {...state, client: true, status: updated, loading: false, error: false}
        case LOGIN_USER_LOADING:
            return {...state, loading: true}
        case LOGIN_USER_FAIL:
            return {...state, loading: false, error: true}

        default :
        return state;
    }
}