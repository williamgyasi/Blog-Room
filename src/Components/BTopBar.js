import React from 'react'
import {Button,Text,Icon } from 'native-base'
import {View} from 'react-native'
import {Theme} from '../../Store'

const BTopBar =({style,onPress,iconName,iconType,barName})=>{
    return(
        <View
        style={{
            height:45,
            alignItems:"center",
            flexDirection:"row",
            
            ...style
            }}>
       <Button
       onPress={onPress}
       
       style={{
          backgroundColor:Theme.primaryCOlor,
          borderBottomStartRadius:10,
       }}
       >
           {/* <Text>{barName}</Text> */}
           <Icon type={iconType} style={{color:Theme.secondaryColor}} name={iconName}/>
       </Button>

       </View>
    )
}

export default BTopBar

