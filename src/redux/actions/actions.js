import {ADD_PROPERTY, AUTH, GET_FAVORITES} from '../actionTypes'
import  * as api from '../../api/index'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const login = (form, navigate, status) => async(dispatch) =>{
    try {
       
            const { data } = await api.login(form)
            console.log(data)
            dispatch({type: AUTH, payload: data})
            navigate('/Home')
            toast("Registration Succesful!Kindly Check your email","#27ae60");
    } catch (error) {
        console.log(error)
        toast("Registration Not Succesful! Kindly retry","#f70c0c")

    }
}


export const register = (form, navigate) => async(dispatch) =>{
    try {
       
        const { data } = await api.register(form)
        console.log(data)
        dispatch({type: AUTH, payload: data})
        navigate('/Home')
        toast("Registration Succesful!Kindly Check your email","#27ae60");
} catch (error) {
    console.log(error)
    toast("Registration Not Succesful! Kindly retry","#f70c0c")

}
}

export const add_property = (form, navigate) =>async(dispatch) => {
    try { 
        const {data} =  await api.add_property(form)
        console.log(data)
        dispatch({type: ADD_PROPERTY, payload: data})
        navigate("/")
        toast("Added Property successfully","#27ae60");


        
    } catch (error) {
        console.log(error)
        toast("Error adding property","#f70c0c")
    }

}

export const get_favorites = () => async(dispatch) => {
    try {
        const {data} =  await api.get_favorites()
        console.log(data)
        dispatch({type: GET_FAVORITES, payload: data})
    } catch (error) {
        console.log(error)
        
    }
}