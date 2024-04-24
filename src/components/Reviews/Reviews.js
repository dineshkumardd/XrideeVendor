import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReviewsScreen from '../ReviewsScreen/ReviewsScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Tab = createMaterialTopTabNavigator();

const Reviews = ({navigation}) => {
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
            <Text style={styles.toolbarTxt}>Reviews</Text>
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
                fontSize: 12,
                textTransform: 'none',
              },
              tabBarIndicatorContainerStyle: {
                width: '40%',
                marginLeft: 60,
              },
            }}>
            <Tab.Screen name="Driver" component={ReviewsScreen} />
            <Tab.Screen name="Vehicle" component={ReviewsScreen} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default Reviews;
