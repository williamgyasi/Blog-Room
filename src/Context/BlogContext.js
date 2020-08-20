import React,{createContext,useState,useReducer} from 'react'
import createDataContext from './createDataContext'

const blogReducer=(state,action)=>{
    switch(action.type){
        case "add_blogpost":
            return [...state,{title:`BlogPost Number ${state.length +1}`}]
            break;

        default:
            return state;
    }
}


const addBlogPost=dispatch=>{
    return()=>{
        dispatch({type:"add_blogpost"})
    }
}


export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost},[])