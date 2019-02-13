import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {colors} from '../settings'

const WidgetContainer = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.leftText}>{props.leftText}</Text>
                {props.rightText && (<Text style={styles.rightText}>{props.rightText}</Text>)}
            </View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 30,
        backgroundColor : "transparent",
        marginBottom : 30
    },

    row : {
        alignItems : "center",
        justifyContent : "space-between",
        flexDirection : "row",
        marginBottom : 15
    },

    leftText : {
        fontSize : 17,
        fontWeight : "200"
    },

    rightText : {
        color : colors.pinkDark
    }
})

export default WidgetContainer