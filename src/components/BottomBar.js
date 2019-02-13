import React from 'react'
import {
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    Platform
} from 'react-native'
import {Icon} from '../components'
import {colors,iphonex} from '../settings'

const Button = Platform.select({
    ios : TouchableOpacity,
    android : TouchableNativeFeedback
});

const BottomBar = (props) => {
    return(
        <View style={styles.container}>
            {props.buttons && props.buttons.map((button,index) => (
                <Button key={index} onPress={() => button.onPress()}>
                    <View>
                        <Icon name={button.name} size={28} color={button.isActive ? colors.pinkDark : colors.gray } />
                    </View>
                </Button>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        backgroundColor : colors.white,
        paddingHorizontal : 30,
        position:"absolute",
        left:0,
        right:0,
        bottom : 0,
        ...iphonex.ifIphoneX({
            height : 60,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            paddingBottom: 5
        },{
            elevation:1,
            height : 56
        }),
        zIndex:2
    }
})

export default BottomBar