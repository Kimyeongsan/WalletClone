import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS, icons } from "../constants"
import { TabIcons } from "../componets";

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                style: {
                    height: 140,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"s
                component={Home}
                options={{
                    tabIcons: ({ focused }) => {
                        return (
                            <TabIcons
                                focused={focused}
                                icon={icons.home} 
                                tabBarShowLabel='Home'/>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
            />
            <Tab.Screen
                name="Market"
                component={Market}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default Tabs;