import React,{useContext} from 'react'
import {Button,Text,List,Icon,Left,Right} from 'native-base'
import {View,FlatList} from 'react-native'
import {Context} from '../Context/BlogContext'
import BlogComponent from '../Components/BlogComponent'
import {Theme} from '../../Store'
import BTopBar from '../Components/BTopBar'


//COMPONENTS
import BStatusBar from '../Components/BStatusBar'

const HomeScreen=({navigation})=>{
    const blogPosts=useContext(Context)

    const _renderItem=({item})=>{
        return(
           <BlogComponent blogdetails={item} onPress={()=>blogPosts.deleteBlogPost(item.id)} />
        )
    }
    return(
        <View style={{flex:1}}>
              <BStatusBar alt={false} />
              <BTopBar 
              style={{justifyContent:"flex-end"}} 
              onPress={()=>navigation.navigate("createBlog")}
              iconName="plus-circle" iconType="Feather" />




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