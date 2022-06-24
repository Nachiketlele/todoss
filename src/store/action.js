import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, COMPLETE_TODO, COUNTER_DECRE, COUNTER_INCRE, DELETE_TODO, GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./action.type";
import axios from "axios"

export const counterInc = ()=> ({type: COUNTER_INCRE})
export const counterDec = ()=> ({type: COUNTER_DECRE})


//GETTODO
export const getData = (dispatch)=>{
    dispatch({type:GET_TODO_LOADING})
    axios.get(`http://localhost:8080/todo`)
    .then((r)=>{
        console.log(r.data);
        dispatch({type:GET_TODO_SUCCESS,payload:r.data})
    }).catch((err)=>{
        dispatch({type:GET_TODO_ERROR})
        console.log(err)
    })
}



//ADD TODO
export const todoApp = (dispatch,payload)=>{
    dispatch({type:ADD_TODO_LOADING})
    axios.post(`http://localhost:8080/todo`,payload)
    .then((r)=>{
        dispatch({type:ADD_TODO_SUCCESS,payload:r.data})
        console.log(r.data)
    }).catch((err)=>{
        dispatch({type:ADD_TODO_ERROR})
        console.log(err)
    })
}




export const completeTodo = (id)=>({type: COMPLETE_TODO, payload: id})
export const deleteTodo = (id)=>(dispatch)=>{
    console.log(id)
    axios.delete(`http://localhost:8080/todo/${id}`)
    .then((r)=>{
        console.log(r.data,"update data")
    }).catch((err)=>{
        console.log(err)
    })
    dispatch({type: DELETE_TODO, payload: id})
}