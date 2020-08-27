import React from 'react'
import { View, Button, Icon } from 'native-base'
import {Text,TextInput} from 'react-native'
// import {HelperText} from 'react-native-paper'

const BInputText=({value,onTextChanged,...style})=>{
    return(
       <TextInput
       style={{
           borderWidth:1,
           borderRadius:10,
           fontSize:20,
           marginTop:10,
           ...style
       }}
       value={value}
       onChangeText={onTextChanged}
        />
    )

}

export default BInputText