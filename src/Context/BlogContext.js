import React,{createContext,useState} from 'react'

const BlogContext=createContext()

export const BlogProvider=({children})=>{
    const [blogPosts,setBlogPosts]=useState([])
    // const blogPosts=[
    //     {title:"My First Blog",},
    //     {title:"My Second Blog",},
    //     {title:"My Third Blog",},
    //     {title:"My Another Again Blog",},
    //     {title:"My Second Another Blog",}
    // ]

    const _addBlogPost=()=>{
        setBlogPosts([...blogPosts,{title:`Blog Post ${blogPosts.length+1}`}])
    }

    return(
        <BlogContext.Provider value={{data:blogPosts,addBlogPost:_addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext