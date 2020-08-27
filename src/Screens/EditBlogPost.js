import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import { Text } from 'native-base'

//REUSABLE COMPONENT
import BInputText from '../Components/BInputText'
import BTopBar from '../Components/BTopBar'



const EditBlogPost=({route,navigation})=>{
    const{title,content,id}=route.params.selectedBlog
    return(
        <View>
            <BTopBar goBack={()=>navigation.goBack()} 
            isLeftIcon iconName={"check"} 
            
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
                onTextChanged={text=>setTitle(text)}
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