import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.flex}>
        <StatusBar backgroundColor="#181818" />
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
export default App;
