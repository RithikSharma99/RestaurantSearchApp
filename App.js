//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';



/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions :{
    title : 'Food Search App'
  }

});
export default createAppContainer(navigator);

