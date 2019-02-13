import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform
} from 'react-native'
import avatar from '../assets/avatar.png'
import { colors, rescale } from '../settings';

const Button = Platform.select({
    ios : TouchableOpacity,
    android : TouchableNativeFeedback
}) 

const CategoryItem = (props) => {
    return(
        <Button>
            <View style={styles.row}>
                <Image source={avatar} style={{
                    width : 125,
                    height : 130
                }} />
                <View style={styles.content}>
                    <Text style={styles.category}>{props.category}</Text>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.desc}>{props.desc}</Text>
                    <Text style={styles.see}>See more</Text>
                </View>
            </View>
        </Button>
    )
}

const styles = StyleSheet.create({
    row : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginTop : 10
    },

    content : {
        backgroundColor : colors.white,
        padding : 10,
        flex:1
    },

    category : {
        fontWeight : "200",
        fontSize : rescale.scaledSize(10)
    },

    title : {
        fontSize : rescale.scaledSize(16),
        paddingTop : 5
    },

    desc : {
        fontWeight : "200",
        fontSize : rescale.scaledSize(12),
        paddingTop : 10,
        paddingBottom : 10
    },

    see : {
        color : "#fd9594"
    }
})

export default CategoryItem