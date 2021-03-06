import React,{useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// SCREEN IMPORTS
import HomeScreen from '../Screens/HomeScreen'
import ShowBlogScreen from '../Screens/ShowBlogScreen'
import CreateBLogScreen from '../Screens/CreateBlogScreen'
import EditBlogPost from '../Screens/EditBlogPost'

//Context
import {Provider} from '../Context/BlogContext'

const RootStack=createStackNavigator()

const RootRouter=({})=>{
    return(
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="homescreen" screenOptions={{headerShown:false}}>
                <RootStack.Screen name="homescreen" component={HomeScreen} />
                <RootStack.Screen name="ShowBlog" component={ShowBlogScreen} />
                <RootStack.Screen name="createBlog" component={CreateBLogScreen} />
                <RootStack.Screen name="editBlog" component={EditBlogPost} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}


const RootNav=RootRouter

export default ()=>{
    return (
        <Provider >
            <RootNav />
        </Provider>
    )

}