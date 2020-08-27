import React,{useState,useContext} from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import { Text } from 'native-base'
import {Context} from '../Context/BlogContext'

//REUSABLE COMPONENT
import BInputText from '../Components/BInputText'
import BTopBar from '../Components/BTopBar'



const EditBlogPost=({route,navigation})=>{
    const{id}=route.params.selectedBlog
    const {data,editBlogPost} =useContext(Context)
    
    const blogPost=data.find(blog=>blog.id===id)
    const [title,setTitle] =useState(blogPost.title)
    const [content,setContent] =useState(blogPost.content)
    
    return(
        <View>
            <BTopBar 
            goBack={()=>navigation.goBack()} 
            isLeftIcon 
            onPress={()=>{
                editBlogPost(id,title,content,()=>navigation.pop())
             
            }}
            iconName={"check"} 
            iconType={"Feather"} 
            style={{justifyContent:"space-between"}}
             barName={"Edit Blog"}/>
            <View style={{marginTop:10,padding:10}}>
                <Text style={styles.inputText}>Blog Title</Text>
            <BInputText 
                value={title}
                onTextChanged={text=>setTitle(text)}
            />
                <Text style={styles.inputText}>BLOG CONTENT</Text>
            <BInputText 
                value={content}
                onTextChanged={text=>setContent(text)}
            />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    inputText:{
        fontSize:20
    }
})

export default EditBlogPost