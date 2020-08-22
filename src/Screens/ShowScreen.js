import React from 'react'
import {View,Text} from 'native-base'

//RE-USABLE COMPONENTS
import {Theme} from '../../Store'
import BTopBar from '../Components/BTopBar'
import BStatusBar from '../Components/BStatusBar'


const ShowBlogScreen=({item})=>{
    return(
        <View>
            <BStatusBar alt />
            <Text>
                WELCOME TO THE SHOW BLOGS SCREEN

            </Text>
        </View>
    )
}