import {AUTH,LOGOUT} from '../actiontypes'

 const AuthReducer = (state = {authState: null,response: ''}, action) => {
    switch(action.type){
        case AUTH:
        console.log(action?.data)
        localStorage.setItem('access_token', JSON.stringify({...action?.data}))
        return {...state, status: "200", authState:action?.data };

        case LOGOUT:
            localStorage.clear()
            return{...state, authState: null}

        default:
        return state;

    }
}
export default AuthReducer