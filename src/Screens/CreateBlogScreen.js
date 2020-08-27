import React,{useContext,useState} from 'react'
import {View,Text} from 'native-base'
import {Context} from '../Context/BlogContext'
import {Dimensions} from 'react-native'
//RE-USABLE COMPONENTS
import {Theme} from '../../Store'
import BTopBar from '../Components/BTopBar'
import BStatusBar from '../Components/BStatusBar'
import BInputText from '../Components/BInputText'
import BCustomBackButton from '../Components/BCustomBackButton'
import BIconButton from '../Components/BIconButton'

const {width,height}=Dimensions.get('window')


const CreateBlogScreen=({route})=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    return(
        <View>
            <BStatusBar alt />
            <BCustomBackButton />
            <View
            style={{
                marginTop:10,
                padding:10,
                
            }}
            >
                <Text style={{fontSize:25,marginTop:10}}>Blog Title</Text>
                <BInputText 
                value={title}
                onTextChanged={text=>setTitle(text)}
                 />
                <Text style={{fontSize:25,marginTop:10}}>Blog Content</Text>
                <BInputText
                 value={content}
                 onTextChanged={text=>setContent(text)}
                  />

            </View>
            <BIconButton 
            width={width*0.5} 
            style={{
                justifyContent:"center",
                
                marginHorizontal:width/4.5,
                marginTop:30,
            }}
            alt 
            buttonName={"Save"}
             iconName="save" iconType="Feather" />
        </View>
    )
}

export default CreateBlogScreen