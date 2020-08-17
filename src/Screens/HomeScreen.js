import React,{useContext} from 'react'
import {Button,Text,List,Icon,Left,Right} from 'native-base'
import {View,FlatList} from 'react-native'
import BlogContext from '../Context/BlogContext'
import BlogComponent from '../Components/BlogComponent'
import {Theme} from '../../Store'

const HomeScreen=()=>{
    const blogPosts=useContext(BlogContext)

    const _renderItem=({item})=>{
        return(
           <BlogComponent blogdetails={item} />
        )
    }
    return(
        <View>
            <Button
            style={{
               backgroundColor:Theme.primaryCOlor,
            }}
            >
                <Icon type="Feather" name="plus-circle"/>
            </Button>
            <FlatList
            data={blogPosts.data}
            extraData={blogPosts.data}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={_renderItem}
             />
        </View>

    )

}

export default HomeScreen;