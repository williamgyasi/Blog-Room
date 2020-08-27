import React,{useContext} from 'react'
import {View,Text} from 'native-base'

import {Context} from '../Context/BlogContext'

//RE-USABLE COMPONENTS
import {Theme} from '../../Store'
import BTopBar from '../Components/BTopBar'
import BStatusBar from '../Components/BStatusBar'


const ShowBlogScreen=({route,navigation})=>{    const {blogID}=route.params
    const {data}=useContext(Context)

    const selectedBlog=data.find(value=>value.id===blogID)

    return(
        <View>
            <BStatusBar />
            <BTopBar
            isLeftIcon
            goBack={()=>navigation.goBack()}
            barName={selectedBlog.title}
            onPress={()=>navigation.navigate("editBlog",{
                selectedBlog
            })}
             iconType="Feather" 
             iconName="edit" 
             style={{justifyContent:"space-between"}} 
             />
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