import {combineReducers} from 'redux'
import  AuthReducer  from './authreducer'
import Add_property_Reducer from './Add_property_Reducer'
import Get_favorites_reducer from './Get_favorites_reducer'
const rootReducer = combineReducers({
    AuthReducer,
    Add_property_Reducer,
    Get_favorites_reducer
})

export default rootReducer