import React,{useReducer} from 'react'


export default(reducer,actions,initialstate)=>{
    const Context=React.createContext()

    //Actions on Context
    const Provider =({children})=>{
        const [blogPosts,dispatch]=useReducer(reducer,initialstate)
        const boundActions={}

        for (let key in actions){
            boundActions[key]=actions[key](dispatch)
        }
        
        return(
            <Context.Provider value={{data:blogPosts,...boundActions}}>
                {children}
            </Context.Provider>
        )
    }

    return {Context,Provider}


}