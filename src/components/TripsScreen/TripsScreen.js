import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ManageTrips from '../ManageTrips/ManageTrips';
import {Routes} from '../../navigation/Routes';

const Tab = createMaterialTopTabNavigator();

const TripsScreen = ({navigation}) => {
  return (
    <View style={styles.flex}>
      <View style={styles.topView}>
        <View style={styles.logoView}>
          <View style={styles.logoInnerView}>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.Profile)}
              style={styles.userimg}>
              <Image
                style={styles.userimg}
                source={require('../../assets/images/user.png')}
              />
            </TouchableOpacity>
            <Text style={styles.toolbarTxt}>Manage Trip</Text>
            <View style={styles.topIconsView} />
          </View>
        </View>
        <View style={styles.topTabView}>
          <Tab.Navigator
            screenOptions={{
              tabBarIndicatorStyle: {backgroundColor: '#FFFFFF', height: 4},
              tabBarStyle: {
                // Offset Tabs to match your layouts margin

                backgroundColor: '#013277',
              },
              tabBarLabelStyle: {
                color: 'white',
                textTransform: 'none',
                fontSize: 12,
              },
              tabBarIndicatorContainerStyle: {
                width: '70%',
                marginLeft: 18,
              },
            }}>
            <Tab.Screen name="Car" component={ManageTrips} />
            <Tab.Screen name="Bike" component={ManageTrips} />
            <Tab.Screen name="Auto" component={ManageTrips} />
            <Tab.Screen name="Load Carrier" component={ManageTrips} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default TripsScreen;
