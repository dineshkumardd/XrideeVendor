import {Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import WalletScreen from '../WalletScreen/WalletScreen';
import TripsScreen from '../TripsScreen/TripsScreen';
import SummaryScreen from '../SummaryScreen/SummaryScreen';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const TabNavigation = createBottomTabNavigator();

const activeStyles = {
  bgGradientColors: ['#ffffff', '#ffffff'],
  headGradientColors: ['#FFD77A', '#ffffff'],
};
const TabArr = [
  {
    label: 'Home',
    img: require('../../assets/images/homeBottom.png'),
    component: HomeScreen,
    route: 'HomeScreen',
  },
  {
    label: 'Wallet',
    img: require('../../assets/images/walletBottom.png'),
    component: WalletScreen,
    route: 'WalletScreen',
  },
  {
    label: 'My Trips',
    img: require('../../assets/images/tripsBottom.png'),
    component: TripsScreen,
    route: 'TripsScreen',
  },

  {
    label: 'Summary',
    img: require('../../assets/images/summaryBottom.png'),
    component: SummaryScreen,
    route: 'SummaryScreen',
  },
];
const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <LinearGradient
        colors={
          focused
            ? activeStyles.headGradientColors
            : activeStyles.bgGradientColors
        }
        start={{x: 0, y: 0}} // left
        end={{x: 0, y: 1}} // right
        style={focused ? styles.bg : styles.btn}>
        <Image
          source={item.img}
          tintColor={focused ? '#FEB200' : '#222222'}
          resizeMode="contain"
        />
      </LinearGradient>

      <Text style={styles.menuTxt}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const MainScreen = ({navigation}) => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <TabNavigation.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/images/homeBottom.png')} />
          ),
          tabBarLabelStyle: {color: '#000000'},
        }}
      />
      <TabNavigation.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/images/walletBottom.png')} />
          ),
          tabBarLabelStyle: {color: '#000000'},
        }}
      />
      <TabNavigation.Screen
        name="My Trips"
        component={TripsScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/images/tripsBottom.png')} />
          ),
          tabBarLabelStyle: {color: '#000000'},
        }}
      />
      <TabNavigation.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/images/summaryBottom.png')} />
          ),
          tabBarLabelStyle: {color: '#000000'},
        }}
      /> */}

      {TabArr.map((item, index) => {
        return (
          <TabNavigation.Screen
            key={index}
            name={item.label}
            component={item.component}
            initialParams={{screen: 'bottom'}}
            options={{
              tabBarButton: props => <TabButton item={item} {...props} />,
              tabBarShowLabel: false,
            }}
          />
        );
      })}
    </TabNavigation.Navigator>
  );
};

export default MainScreen;
