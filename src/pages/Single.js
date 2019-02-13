import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Card,Container,Header,Icon,CategoryItem} from '../components'
import {colors,navigation} from '../settings'

import avatar from '../assets/avatar.png'

const UserHeader = (props) => {
    return(
        <View style={[styles.userHeader,styles.row]}>
            <Image 
                style={styles.avatar}
                source={avatar}
                resizeMode={"cover"}
            />
            <View style={styles.userHeaderContainer}>
                <View style={styles.row}>
                    <Text style={{fontSize : 22,color:colors.white,textShadowColor: 'rgba(0, 0, 0, 0.6)',
         textShadowOffset: {width: 0, height: 1},
         textShadowRadius: 5}}>Leia Rachel's</Text>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Icon name={"star"} size={16} color={"#feb822"} style={styles.star} />
                            <Icon name={"star"} size={16} color={"#feb822"} style={styles.star} />
                            <Icon name={"star"} size={16} color={"#feb822"} style={styles.star} />
                            <Icon name={"star"} size={16} color={"#feb822"} style={styles.star} />
                        </View>
                        <Text style={{color:colors.white,fontSize:14}}>(1321)</Text>
                    </View>
                </View>
                <View style={[styles.row,{paddingTop:25}]}>
                    <Text style={{fontWeight:"200"}}>
                        <Icon name="map-marker" size={16} color={colors.black} />
                        Canada
                    </Text>
                    <View style={styles.row}>
                        <Text style={{fontWeight:"200"}}>2.1k followers</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

class Single extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <LinearGradient 
                    style={styles.header}
                    colors={['#ff7777','#ff9c7c']}
                >
                    <Header 
                        leftButtons={[{
                            icon : "arrow-left",
                            color : colors.white,
                            size : 32,
                            onPress : () => {
                                navigation.pop(this.props.componentId)
                            }
                        }]}
                        rightButtons={[{
                            icon : "account-plus-outline",
                            color : colors.white,
                            size : 24,
                            onPress : () => {}
                        },{
                            icon : "comment-outline",
                            color : colors.white,
                            size : 24,
                            onPress : () => {}
                        }]}
                    />
                </LinearGradient>
                <ScrollView style={styles.scroll}>
                    <View style={{paddingHorizontal : 30,paddingTop:60}}>
                    
                        <View style={styles.rowSpecial}>
                            <Text style={{fontSize:22,paddingRight:15,fontWeight : "200"}}>Category</Text>
                            <Text style={{fontSize:22,paddingRight:15,fontWeight : "200"}}>Package</Text>
                            <View style={{marginTop:10}}>
                                <Text style={{fontSize:22}}>Projects</Text>
                                <View style={{backgroundColor:"#ff8788",height:2,marginTop:10}} />
                            </View>
                        </View>

                        <View style={{height:15}} />

                        <CategoryItem 
                            category={"Make-up & Dress"}
                            title={"Caroline & Ethan Fairytale"}
                            desc={`Garden party in the middle of${"\n"}Minessota? The hot weather ...`}
                        />
                        <CategoryItem 
                            category={"Vendor, food, make-up & dress"}
                            title={"Mr. & Mrs. Browns"}
                            desc={`Shabby chic style has been top hits this past few months ...`}
                        />

                        <View style={[styles.row,{paddingTop : 40,paddingBottom: 15}]}>
                            <Text style={{fontSize: 20,fontWeight:"200"}}>Leia Rachel's Special</Text>
                            <Text style={{color:"#ff8989"}}>See All</Text>
                        </View>
                        <View style={styles.rowWrap}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </View>

                    </View>

                </ScrollView>
                <UserHeader />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#ff7777"
    },

    header : {
        paddingBottom : 60
    },

    scroll : {
        backgroundColor : "#fff9f9"
    },

    userHeader : {
        left:30,
        right:30,
        position : "absolute",
        zIndex : 2,
        top : 100
    },

    userHeaderContainer : {
        flex:1,
        paddingLeft:15
    },

    avatar : {
        width : 75,
        height : 75,
        borderRadius : 75/2
    },

    star : {
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10
    },

    row : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },

    rowWrap : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        flexWrap : "wrap"
    },

    rowSpecial : {
        flexDirection : "row",
        alignItems : "center",
    }
})

export default Single