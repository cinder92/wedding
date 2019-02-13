import { Navigation } from "react-native-navigation";

export function navigateTo(page,props = {},options = {}){
    Navigation.push("Wedding",{
        component : {
            name : page,
            passProps : props,
            options : {
                topBar :{
                    visible : false,
                    animate: false,
                    drawBehind: true
                },
                statusBar: {
                    style: 'dark',
                    backgroundColor : "white"
                },
                layout : {
                    orientation : ['portrait']
                },
                ...options
            }
        }
    })
}

export function pop(page){
    Navigation.pop(page)
}

export function popTo(page,props,options){
    Navigation.popTo("Wedding",{
        component : {
            name : page,
            passProps : props,
            options : {
                topBar :{
                    visible : false,
                    animate: false,
                    drawBehind: true
                },
                statusBar: {
                    style: 'dark',
                    backgroundColor : "white"
                },
                ...options
            }
        }
    });
}