import {createContext} from 'react'

const blogContext=createContext()
const userDetails=createContext()

export const BlogProvider=blogContext.Provider
export const userDetailsProvider=userDetails.Provider
export default blogContext