import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// SCREEN IMPORTS
import HomeScreen from '../Screens/HomeScreen'

//Context
import {BlogProvider} from '../Context/BlogContext'

const RootStack=createStackNavigator()

const RootRouter=({})=>{
    return(
        <NavigationContainer>
            
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name="Homescreen" component={HomeScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}


const RootNav= RootRouter

export default ()=>{
    return (
        <BlogProvider value={"WELCOME"} >
            <RootNav />
        </BlogProvider>
    )

}