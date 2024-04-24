import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import ManageVehicles from '../ManageVehicles/ManageVehicles';
import OnlineCard from '../OnlineCard/OnlineCard';
const Tab = createMaterialTopTabNavigator();
const OnlineCardTabs = ({navigation}) => {
  return (
    <View style={styles.flex}>
      <View style={styles.topView}>
        <View style={styles.logoView}>
          <View style={styles.logoInnerView}>
            <Text style={styles.toolbarTxt}>Online Vehicles</Text>
          </View>
        </View>
        <View style={styles.topTabView}>
          <Tab.Navigator
            screenOptions={{
              tabBarIndicatorStyle: {backgroundColor: '#FFFFFF', height: 4},
              tabBarStyle: {
                backgroundColor: '#013277',
              },
              tabBarLabelStyle: {
                color: 'white',
                fontSize: 10,
                textTransform: 'none',
              },
              tabBarIndicatorContainerStyle: {
                width: '60%',
                marginLeft: 15,
              },
            }}>
            <Tab.Screen name="Car" component={OnlineCard} />
            <Tab.Screen name="Bike" component={OnlineCard} />
            <Tab.Screen name="Auto" component={OnlineCard} />
            <Tab.Screen name="LC" component={OnlineCard} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default OnlineCardTabs;
