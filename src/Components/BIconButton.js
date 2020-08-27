import React from 'react'
import {Button,Left,Right,View,Text,Icon} from 'native-base'
import {Theme} from '../../Store'
import {TouchableOpacity} from 'react-native'


const BIconButton=({buttonName,iconName,iconType,style,alt,width,onPress})=>{
    const dark=alt?Theme.primaryCOlor:Theme.secondaryColor
    const iconTheme=alt?"white":"black"
    return(
       <TouchableOpacity
       onPress={onPress}
       style={{
           ...style,
           flexDirection:"row",
           justifyContent:"space-between",
           alignItems:"center",
           padding:10,
           borderRadius:10,
           backgroundColor:dark,
           width}}>
           <Text style={{fontSize:20,color:iconTheme}}>
            {buttonName}
           </Text>
           <Icon type={iconType} style={{color:iconTheme}} name={iconName} />
       </TouchableOpacity>
    )

}

export default BIconButton