import React from 'react'
import {Text} from 'native-base'
import {View} from 'react-native'
import BlogContext from '../Context/BlogContext'
import {Theme} from '../../Store'

const BlogComponent =({blogdetails})=>{
    return(
        <View style={{backgroundColor:"rgb(76,152,207)"}}>
            <Text style={{color:Theme.secondaryColor}}>
                {blogdetails.title}
            </Text>
        </View>
    )
}

export default BlogComponent