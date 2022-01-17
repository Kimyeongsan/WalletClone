import React from "react";
import {
    View,
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS, icons } from "../constants"
import { TabIcons } from "../componets";

const Tab = createBottomTabNavigator()


// Custom Button Function
const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={onPress}
        > 
        <View>{children}</View>
        
        </TouchableOpacity>
    )
}

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 140,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}>

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons
                                focused={focused}
                                icon={icons.home}
                                label='Home'
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons
                                focused={focused}
                                icon={icons.briefcase}
                                label='Potofolio'
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons
                                focused={focused}
                                icon={icons.trade}
                                label='Trade'
                                isTrade={true}
                            />
                        )
                    },

                    // Custom TabBar Button
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress={() => console.log("Trade Buttn")}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons
                                focused={focused}
                                icon={icons.market}
                                label='Market'
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons
                                focused={focused}
                                icon={icons.profile}
                                label='Profile'
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}


export default Tabs;