import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import {BottomBar,Container,Header,WidgetContainer,SliderWidget,CategoryWidget} from '../components'
import {colors, navigation} from '../settings'

class Home extends Component{

    state = {
        section : "home"
    }

    setSection = (section) => { this.setState({section}) }

    render(){
        const {section} = this.state
        return(
            <Container style={styles.container}>
                <Header 
                    leftButtons={[{
                        icon : "heart",
                        size: 24,
                        color : colors.pinkDark,
                        onPress : () => {
                            navigation.navigateTo("Single",{},{
                                statusBar: {
                                    backgroundColor: 'white',
                                    style : "light"
                                }
                            })
                        }
                    }]}
                    rightButtons={[{
                        icon : "magnify",
                        size : 24,
                        color : colors.black,
                        onPress : () => {}
                    },{
                        icon : "bell-outline",
                        size : 24,
                        color : colors.black,
                        onPress : () => {}
                    }]}
                />

                <ScrollView
                    showVerticalScrollIndicator={false}
                >

                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>Create your own version{'\n'}off perfect wedding</Text>
                    </View>

                    <WidgetContainer
                        leftText={"Browse by theme"}
                        rightText={"See All"}
                    >
                        <SliderWidget />
                    </WidgetContainer>

                    <WidgetContainer
                        leftText={"Browse by category"}
                    >
                        <CategoryWidget />   
                    </WidgetContainer>

                    <WidgetContainer
                        leftText={"Limited time offer"}
                    >
                        <SliderWidget biggest={true} />   
                    </WidgetContainer>

                    <View style={{height:15}} />

                </ScrollView>

                <BottomBar 
                    buttons={[
                        {
                            name : "home-outline",
                            isActive : (section == "home"),
                            onPress : () => this.setSection("home")
                        },
                        {
                            name : "heart-outline",
                            isActive : (section == "favorites"),
                            onPress : () => this.setSection("favorites")
                        },
                        {
                            name : "clipboard-text-outline",
                            isActive : (section == "todo"),
                            onPress : () => this.setSection("todo")
                        },
                        {
                            name : "comment-outline",
                            isActive : (section == "comments"),
                            onPress : () => this.setSection("comments")
                        },
                        {
                            name : "account-outline",
                            isActive : (section == "account"),
                            onPress : () => this.setSection("account")
                        }
                    ]}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.pink
    },

    titleWrap : {
        paddingHorizontal : 30,
        marginTop : 20,
        marginBottom : 35
    },
    title : {
        fontSize : 25,
        fontWeight : "500"
    }
})

export default Home