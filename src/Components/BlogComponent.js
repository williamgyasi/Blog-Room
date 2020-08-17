import React from 'react'
import {Text} from 'native-base'
import {View} from 'react-native'
import BlogContext from '../Context/BlogContext'

const BlogComponent =({blogdetails})=>{
    return(
        <View>
            <Text>
                {blogdetails.length}
            </Text>
        </View>
    )
}

export default BlogComponent