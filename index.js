import { Navigation } from "react-native-navigation";
import * as sections from './src/pages'

Object.keys(sections).map((page,index) => {
  //registerComponentWithRedux(page, () => sections[page],Provider,store)
  Navigation.registerComponent(page, () => sections[page]);
})

//https://github.com/wix/react-native-navigation/issues/4646
//https://github.com/wix/react-native-navigation/issues/4691
//https://dribbble.com/shots/5081898-Wedding-Vendor-App-Exploration/attachments
//https://materialdesignicons.com/

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id : "Wedding",
        children: [{
          component: {
            name: "Home",
            options : {
              topBar : {
                visible:false,
                animate: false,
                drawBehind: true
              },
              statusBar: {
                style: 'dark',
                backgroundColor : "white"
              },
              layout : {
                orientation : ['portrait'] //landscape
              }
            }
          }
        }]
      }
    }
  });
});