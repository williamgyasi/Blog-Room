import React,{useContext} from 'react'
import {View,Text} from 'native-base'
import {Context} from '../Context/BlogContext'
//RE-USABLE COMPONENTS
import {Theme} from '../../Store'
import BTopBar from '../Components/BTopBar'
import BStatusBar from '../Components/BStatusBar'
import BInputText from '../Components/BInputText'
import BCustomBackButton from '../Components/BCustomBackButton'


const CreateBlogScreen=({route})=>{
    return(
        <View>
            <BStatusBar alt />
            <BCustomBackButton />
            <View
            style={{
                marginTop:10,
                padding:10,
                
            }}
            >
                <Text>Blog Title</Text>
            </View>
        </View>
    )
}

export default CreateBlogScreen