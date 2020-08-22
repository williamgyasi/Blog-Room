import React from 'react'
import { View,Button,Text,Icon} from 'native-base'
import {withNavigation} from '@react-navigation/compat'
import {Theme} from '../../Store'
import {TouchableOpacity} from 'react-native'

const BCustomBackButton=({onPress,navigation})=>{
    return(
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={{
            width:45,
            height:45,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:Theme.primaryCOlor,
            borderRadius:30,
            marginTop:20,
            elevation:5,
            shadowColor:"black",
            marginLeft:25,
            
        }}
        >
            <Icon name={"chevron-left"} style={{color:"white"}} type={"Feather"} />

        </TouchableOpacity>
    )

}

export default withNavigation(BCustomBackButton)