import React from 'react'
import {Text,Icon} from 'native-base'
import {View,TouchableOpacity} from 'react-native'
import BlogContext from '../Context/BlogContext'
import {Theme} from '../../Store'



const BlogComponent =({blogdetails})=>{
    return(
        <TouchableOpacity
        onPress={()=>alert("adad")}
         >
            <View 
        style={{
            backgroundColor:"rgb(76,152,207)",
            flexDirection:"row",
            alignItems:"center",
            padding:10,
            justifyContent:"space-between",
            marginBottom:10,
            height:50
            }}>
            <Text style={{color:Theme.secondaryColor}}>
                {blogdetails.title}
            </Text>
            <Icon name={"trash-2"} type="Feather" style={{color:Theme.secondaryColor}} />
        </View>

        </TouchableOpacity>
        
    )
}

export default BlogComponent