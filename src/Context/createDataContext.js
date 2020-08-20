import React,{useReducer} from 'react'


export default(reducer,actions,initialstate)=>{
    const Context=React.createContext()

    const Provider =({children})=>{
        const [blogPosts,dispatch]=useReducer(reducer,initialstate)
        return(
            <Context.Provider value={{data:blogPosts,addBlogPost}}>
                {children}
            </Context.Provider>
        )
    }

    return {Context,Provider}


}