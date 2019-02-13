import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import {iphonex} from '../settings'

const Container = (props) => {
    return(
        <View style={[styles.container,props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        ...iphonex.ifIphoneX({
            paddingTop: 50
        }, {
            paddingTop: 20
        })
    }
});

export default Container