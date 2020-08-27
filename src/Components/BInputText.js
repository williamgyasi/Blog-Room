import React from 'react'
import { View, Button, Icon } from 'native-base'
import {Text,TextInput} from 'react-native'
// import {HelperText} from 'react-native-paper'

const BInputText=({...props})=>{
    return(
        <View>
           <Button>
               <Icon type="Feather" name={"chevron-left"} />
           </Button>
           {/* <HelperText /> */}
        </View>
    )

}

export default BInputText