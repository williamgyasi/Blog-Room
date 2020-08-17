import React,{useContext} from 'react'
import {Button,Text} from 'native-base'
import {View} from 'react-native'
import blogContext from '../Context/BlogContext'

const HomeScreen=()=>{
    const value=useContext(blogContext)
    return(
        <View>
            <Text>
                {value}
                
            </Text>
        </View>

    )

}

export default HomeScreen;