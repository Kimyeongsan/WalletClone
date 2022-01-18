import React from "react";
import {
    View,
    TouchableOpacity,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { setTradeModal } from "../stores/tab/tabActions"

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, icons } from "../constants";
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

const Tabs = ({ setTradeModal, isTradeModalVisible }) => {

    // Trade Button Effect
    function tradeTabButtonOnClickHandler() {
        setTradeModal(!isTradeModalVisible);
    }

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
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcons
                                    focused={focused}
                                    icon={icons.home}
                                    label='Home'
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e => {
                        if(!isTradeModalVisible) {
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcons
                                    focused={focused}
                                    icon={icons.briefcase}
                                    label='Potofolio'
                                />
                            )
                        }
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
                                icon={isTradeModalVisible ? icons.close : icons.trade}
                                iconStyle={isTradeModalVisible ? {
                                    width: 15,
                                    height: 15,
                                } : null}
                                label='Trade'
                                isTrade={true}
                            />
                        )
                    },

                    // Custom TabBar Button "X" icon
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress={() => tradeTabButtonOnClickHandler()}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{

                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcons
                                    focused={focused}
                                    icon={icons.market}
                                    label='Market'
                                />
                            )
                        }
                    }

                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{

                    tabBarIcon: ({ focused }) => {
                        if (!isTradeModalVisible) {
                            return (
                                <TabIcons
                                    focused={focused}
                                    icon={icons.profile}
                                    label='Profile'
                                />
                            )
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}

// export default Tabs;

function mapStateToProps(state) {
    return {
        isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTradeModal: (isVisible) => { return dispatch(setTradeModal(isVisible)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);