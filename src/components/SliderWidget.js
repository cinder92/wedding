import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native'
import wife from '../assets/wife.png'

const {width} = Dimensions.get("window")

const SliderWidget = (props) => {
    return(
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.itemWrap}>
                <Image 
                    source={wife}
                    resizeMode={"cover"}
                    style={props.biggest ? styles.itemBiggest : styles.item}
                />
                <Text style={styles.itemTitle}>Enchanting white</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={wife}
                    resizeMode={"cover"}
                    style={props.biggest ? styles.itemBiggest : styles.item}
                />
                <Text style={styles.itemTitle}>Rustic Party</Text>
            </View>
            <View style={[styles.itemWrap,{marginRight:0}]}>
                <Image 
                    source={wife}
                    resizeMode={"cover"}
                    style={props.biggest ? styles.itemBiggest : styles.item}
                />
                <Text style={styles.itemTitle}>Enchanting white</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemWrap : {
        marginRight : 20
    },

    item : {
        width : (width / 1.5) - 20
    },

    itemBiggest : {
        width : (width / 1.3) - 20
    },

    itemTitle : {
        fontSize : 19,
        fontWeight : "500",
        marginTop: 10
    }
})

export default SliderWidget