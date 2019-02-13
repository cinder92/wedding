import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native'
import {Icon} from '../components'
import avatar from '../assets/avatar.png'
import { colors } from '../settings';

const {width} = Dimensions.get("window")

const Button = Platform.select({
    ios : TouchableOpacity,
    android : TouchableNativeFeedback
}) 


const Card = (props) => {
    return(
        <Button>
            <View style={styles.card}>
                <Image source={avatar} 
                    style={{
                        width : "100%"
                    }}
                />

                <View style={{padding : 10}}>
                    <View style={styles.row}>
                        <Text style={{fontWeight:"200"}}>Food</Text>
                        <View style={styles.row}>
                            <Icon name="star" color={"#feb822"} size={16} />
                            <Icon name="star" color={"#feb822"} size={16} />
                            <Icon name="star" color={"#feb822"} size={16} />
                            <Icon name="star" color={"#feb822"} size={16} />
                            <Icon name="star" color={"#feb822"} size={16} />
                        </View>
                    </View>

                    <Text style={{fontSize:20,fontWeight:"300",paddingTop:15,paddingBottom:15}}>Europen Banquet</Text>
                    <View style={styles.row}>
                        <Text style={{color:"#fe7676",fontWeight:"200"}}>Start from</Text>
                        <Text style={{color:"#fe7676",fontWeight:"400"}}>$ 650</Text>
                    </View>
                </View>
            </View>
        </Button>
    )
}

const styles = StyleSheet.create({
    card : {
        backgroundColor : colors.white,
        width : (width / 2) - 36,
        marginTop: 10
    },

    row : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    }
})

export default Card