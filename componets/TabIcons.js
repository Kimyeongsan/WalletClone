import React from 'react'
import { View, Text, Image } from 'react-native'

import { FONTS, COLORS } from '../constants'

const TabIcons = ({ focused, icon, iconStyle, label, isTrade }) => {

    if(isTrade) {
        return(
            <View>
                <Text style={{ color: COLORS.white, ...FONTS.h4}}>{label}</Text>
            </View>
        )
        
    } else {
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>

                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.white : COLORS.secondary,
                        ...iconStyle
                    }}
                >

                </Image>
                <Text style={{ color: focused ? COLORS.white : COLORS.secondary}}>{label}</Text>
            </View>
        )
    }
}

export default TabIcons;