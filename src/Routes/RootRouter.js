import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// SCREEN IMPORTS
import HomeScreen from '../Screens/HomeScreen'
import ShowBlogScreen from '../Screens/ShowBlogScreen'

//Context
import {Provider} from '../Context/BlogContext'

const RootStack=createStackNavigator()

const RootRouter=({})=>{
    return(
        <NavigationContainer>
            
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name="Homescreen" component={HomeScreen} />
                <RootStack.Screen name="ShowBlog" component={ShowBlogScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}


const RootNav= RootRouter

export default ()=>{
    return (
        <Provider >
            <RootNav />
        </Provider>
    )

}