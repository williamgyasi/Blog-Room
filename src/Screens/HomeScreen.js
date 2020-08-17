import React,{useContext} from 'react'
import {Button,Text,List} from 'native-base'
import {View,FlatList} from 'react-native'
import BlogContext from '../Context/BlogContext'
import BlogComponent from '../Components/BlogComponent'

const HomeScreen=()=>{
    const blogPosts=useContext(BlogContext)

    const _renderItem=({item})=>{
        return(
           <BlogComponent blogdetails={item} />
        )
    }
    return(
        <View>
            <FlatList
            data={blogPosts}
            extraData={blogPosts}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={_renderItem}

             />
        </View>

    )

}

export default HomeScreen;