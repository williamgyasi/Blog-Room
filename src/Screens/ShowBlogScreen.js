import React,{useContext} from 'react'
import {View,Text} from 'native-base'

import {Context} from '../Context/BlogContext'

//RE-USABLE COMPONENTS
import {Theme} from '../../Store'
import BTopBar from '../Components/BTopBar'
import BStatusBar from '../Components/BStatusBar'


const ShowBlogScreen=({route})=>{
    const {selectedBlog}=route.params
    const {data}=useContext(Context)

    console.log(data)
    return(
        <View>
            <BStatusBar alt />
            <Text>
                WELCOME TO THE {selectedBlog.title}
            </Text>
            <Text>
                WELCOME TO THE {selectedBlog.id}
            </Text>
        </View>
    )
}

export default ShowBlogScreen