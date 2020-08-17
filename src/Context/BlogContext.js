import React,{createContext} from 'react'

const BlogContext=createContext()

export const BlogProvider=({children})=>{
    return(
        <BlogContext.Provider value={"welcome context reloaded"}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext