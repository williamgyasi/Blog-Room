import React from 'react'
import {StatusBar} from 'react-native'

const BStatusBar=({alt})=>{
    const background=alt ? "rgb(64,200,193)" : "rgb(6,125,250)"
    const barStyle=alt ? "dark-content" :"light-content"
    return(
        <StatusBar 
        barStyle={barStyle} 
        backgroundColor={background} 
        animated={true}  />
    )

}

export default BStatusBar