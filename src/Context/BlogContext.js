import React,{createContext} from 'react'

const BlogContext=createContext()

export const BlogProvider=({children})=>{
    const blogPosts=[
        {title:"My First Blog",},
        {title:"My Second Blog",},
        {title:"My Third Blog",},
        {title:"My Another Again Blog",},
        {title:"My Second Another Blog",}
    ]
    return(
        <BlogContext.Provider value={blogPosts}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext