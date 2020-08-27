import React,{useContext} from 'react'
import {View,Text} from 'native-base'

import {Context} from '../Context/BlogContext'

//RE-USABLE COMPONENTS
import {Theme} from '../../Store'
import BTopBar from '../Components/BTopBar'
import BStatusBar from '../Components/BStatusBar'


const ShowBlogScreen=({route,navigation})=>{
    const {selectedBlog}=route.params
    const {data}=useContext(Context)

    return(
        <View>
            <BStatusBar />
            <BTopBar onPress={()=>navigation.navigate("editBlog")} iconType="Feather" iconName="edit" style={{justifyContent:"flex-end"}} />
            <Text>
                WELCOME TO THE {selectedBlog.title}
            </Text>
            <Text>
                WELCOME TO THE {selectedBlog.content}
            </Text>
        </View>
    )
}

export default ShowBlogScreen