import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    Dimensions
} from 'react-native'
import { Icon } from '../components'
import { colors } from '../settings';

const {width} = Dimensions.get("window");
const itemWidth = (width / 5) - 15;

const Button = Platform.select({
    ios : TouchableOpacity,
    android : TouchableNativeFeedback
})

const CategoryWidget = (props) => {
    return(
        <View style={[styles.container,styles.row]}>
            <Button>
                <View style={styles.button}>
                    <Icon name="account-search-outline" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Vendor</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="city" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Venue</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="camera" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Photo</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="food-fork-drink" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Food</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="broom" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Makeup</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="tshirt-crew-outline" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Dress</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="cube" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Invit.</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="diamond" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Ring</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="gift" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Souve.</Text>
                </View>
            </Button>
            <Button>
                <View style={styles.button}>
                    <Icon name="apps" size={32} color={colors.white} />
                    <Text style={styles.buttonText}>Etc.</Text>
                </View>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "transparent",
        flexWrap : "wrap"
    },

    row : {
        alignItems : "center",
        justifyContent : "space-between",
        flexDirection : "row"
    },

    button : {
        width : itemWidth - 5,
        height : itemWidth - 5,
        borderRadius : (itemWidth/2),
        backgroundColor : colors.pinkDark,
        alignItems : "center",
        justifyContent : "center",
        marginBottom : 15
    },

    buttonText : {
        color : colors.white,
        marginTop: -5,
        fontSize : 9.5,
        fontWeight : "bold"
    }
})

export default CategoryWidget