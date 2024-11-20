import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'



const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
    </View>
  )

}

const TabLayout = () => {
  return (
   <>
    <Tabs>


      <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="services"
        options={{
          title:'Services',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.services}
            color={color}
            name="services"
            focused={focused}
           />
          )
        }}
      />

<Tabs.Screen
        name="doctor"
        options={{
          title:'Doctor',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.doctor}
            color={color}
            name="doctor"
            focused={focused}
           />
          )
        }}
      />

<Tabs.Screen
        name="mail"
        options={{
          title:'Mail',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.mail}
            color={color}
            name="mail"
            focused={focused}
           />
          )
        }}
      />

<Tabs.Screen
        name="user"
        options={{
          title:'User',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.user}
            color={color}
            name="user"
            focused={focused}
           />
          )
        }}
      />
    </Tabs>
   </>
  )
}

export default TabLayout