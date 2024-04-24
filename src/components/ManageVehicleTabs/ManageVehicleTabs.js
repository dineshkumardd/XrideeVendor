import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import ManageVehicles from '../ManageVehicles/ManageVehicles';
const Tab = createMaterialTopTabNavigator();

const ManageVehicleTabs = ({navigation}) => {
  return (
    <View style={styles.flex}>
      <View style={styles.topView}>
        <View style={styles.logoView}>
          <View style={styles.logoInnerView}>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={styles.userimg}>
              <FontAwesomeIcon icon={faArrowLeft} color="#FFFFFF" size={20} />
            </TouchableOpacity>
            <Text style={styles.toolbarTxt}>Manage Vehicles</Text>
            <View style={styles.topIconsView} />
          </View>
        </View>
        <View style={styles.topTabView}>
          <Tab.Navigator
            screenOptions={{
              tabBarIndicatorStyle: {backgroundColor: '#FFFFFF', height: 4},
              tabBarStyle: {
                // Offset Tabs to match your layouts margin
                paddingLeft: 8,
                paddingRight: 8, // Add paddingRight to ensure space-between alignment
                backgroundColor: '#013277',
                display: 'flex', // Use flexbox
                justifyContent: 'space-between', // Align items with space-between
              },
              tabBarLabelStyle: {
                color: 'white',
              },
              tabBarIndicatorContainerStyle: {
                width: '70%',
                marginLeft: 25,
              },
            }}>
            <Tab.Screen name="Car" component={ManageVehicles} />
            <Tab.Screen name="Bike" component={ManageVehicles} />
            <Tab.Screen name="Auto" component={ManageVehicles} />
            <Tab.Screen name="LC" component={ManageVehicles} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default ManageVehicleTabs;
