import React,{useContext} from 'react'
import {Button,Text,List,Icon,Left,Right} from 'native-base'
import {View,FlatList} from 'react-native'
import {Context} from '../Context/BlogContext'
import BlogComponent from '../Components/BlogComponent'
import {Theme} from '../../Store'

//COMPONENTS
import BStatusBar from '../Components/BStatusBar'

const HomeScreen=()=>{
    const blogPosts=useContext(Context)

    const _renderItem=({item})=>{
        return(
           <BlogComponent blogdetails={item} />
        )
    }
    return(
        <View style={{flex:1}}>
              <BStatusBar alt={false} />
            <View
             style={{
                 flexDirection:"row",
                 height:50,
                 justifyContent:"flex-end",
                 alignItems:"center"
                 }}>
            <Button
            onPress={blogPosts.addBlogPost}
            style={{
               backgroundColor:Theme.primaryCOlor,

            }}
            >
                <Text>ADD BLOG</Text>
                <Icon type="Feather" style={{color:Theme.secondaryColor}} name="plus-circle"/>
            </Button>

            </View>
           
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