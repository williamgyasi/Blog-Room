import React from 'react'
import {Button,Text,Icon } from 'native-base'
import {View} from 'react-native'
import {Theme} from '../../Store'

const BTopBar =({style,goBack,onPress,iconName,iconType,barName,isLeftIcon})=>{
    return(
        <View
        style={{
            height:45,
            alignItems:"center",
            flexDirection:"row",
            ...style}}>
        {
            isLeftIcon &&  <Button
            onPress={goBack}
            style={{
               backgroundColor:Theme.primaryCOlor,
               borderBottomEndRadius:10,
            }}
            >
                <Icon type={"Feather"} style={{color:Theme.secondaryColor}} name={"chevron-left"}/>
            </Button>
        }

        <Text style={{fontSize:20}}>{barName}</Text>
       <Button
       onPress={onPress}
       style={{
          backgroundColor:Theme.primaryCOlor,
          borderBottomStartRadius:10,
          alignSelf:"flex-end"
       }}
       >
           
           <Icon type={iconType} style={{color:Theme.secondaryColor}} name={iconName}/>
       </Button>

       </View>
    )
}

export default BTopBar

