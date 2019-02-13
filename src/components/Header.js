import React from 'react'
import {
    View,
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native'
import {Icon} from '../components'

const Button = Platform.select({
    ios : TouchableOpacity,
    android : TouchableNativeFeedback
});

const Header = (props) => {
    return(
        <View style={[styles.container,styles.row,props.style]}>
            <View style={styles.row}>
                {props.leftButtons && props.leftButtons.map((button,index) => (
                    <Button key={index} onPress={() => button.onPress()}>
                        <View style={[button.style,((index+1) != props.rightButtons.length) ? {paddingRight : 8} : {}]}>
                            <Icon name={button.icon} size={button.size} color={button.color} />
                        </View>
                    </Button>
                ))}
            </View>

            <View style={styles.row}>
                {props.rightButtons && props.rightButtons.map((button,index) => (
                    <Button key={index} onPress={() => button.onPress()}>
                        <View style={[button.style,((index+1) != props.rightButtons.length) ? {paddingRight : 8} : {}]}>
                            <Icon name={button.icon} size={button.size} color={button.color} />
                        </View>
                    </Button>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "transparent",
        paddingHorizontal : 30
    },

    row : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
    }
})

export default Header