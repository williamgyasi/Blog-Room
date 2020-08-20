import React,{createContext,useState,useReducer} from 'react'

const BlogContext=createContext()

const blogReducer=(state,action)=>{
    switch(action.type){
        case "add_blogpost":
            return [...state,{title:`BlogPost Number ${state.length +1}`}]
            break;

        default:
            return state;
    }
}

export const BlogProvider=({children})=>{
    const [blogPosts,dispatch]=useReducer(blogReducer,[])

    const addBlogPost=()=>{
        dispatch({type:"add_blogpost",payload:blogPosts})
    }


    return(
        <BlogContext.Provider value={{data:blogPosts,addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext