import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import Login from '../components/Login/Login';
import OnBoard from '../components/OnBoard/OnBoard';
import MainScreen from '../components/MainScreen/MainScreen';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import ChangePassword from '../components/ChangePassword/ChangePassword';
import OtpScreen from '../components/OtpScreen/OtpScreen';
import ResetSuccess from '../components/ResetSuccess/ResetSuccess';
import UserProfile from '../components/UserProfile/UserProfile';
import EditProfile from '../components/EditProfile/EditProfile';
import Reviews from '../components/Reviews/Reviews';
import Earnings from '../components/Earnings/Earnings';
import ManageVehicleTabs from '../components/ManageVehicleTabs/ManageVehicleTabs';
import VehicleDetails from '../components/VehicleDetails/VehicleDetails';
import ManageDriver from '../components/ManageDriver/ManageDriver';
import DriverDetails from '../components/DriverDetails/DriverDetails';
import TrackVehicleTabs from '../components/TrackVehicleTabs/TrackVehicleTabs';
import TrackScreen from '../components/TrackScreen/TrackScreen';
import VehicleStatusTabs from '../components/VehicleStatusTabs/VehicleStatusTabs';
import OfferDealTabs from '../components/OfferDealTabs/OfferDealTabs';
import BasicPriceTabs from '../components/BasicPriceTabs/BasicPriceTabs';
import PeriodicPriceTabs from '../components/PeriodicPriceTabs/PeriodicPriceTabs';
import ManageBasicRates from '../components/ManageBasicRates/ManageBasicRates';
import SubscribeTabs from '../components/SubscribeTabs/SubscribeTabs';
import Language from '../components/Language/Language';
import OnlineCardTabs from '../components/OnlineCardTabs/OnlineCardTabs';
import ManagePeriodicRates from '../components/ManagePeriodicRates/ManagePeriodicRates';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name={Routes.Splash} component={SplashScreen} />
      <Stack.Screen name={Routes.Onboard} component={OnBoard} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Forgot} component={ForgotPassword} />
      <Stack.Screen name={Routes.Dashboard} component={MainScreen} />

      <Stack.Screen name={Routes.Change} component={ChangePassword} />
      <Stack.Screen name={Routes.Otp} component={OtpScreen} />
      <Stack.Screen name={Routes.Reset} component={ResetSuccess} />
      <Stack.Screen name={Routes.Profile} component={UserProfile} />
      <Stack.Screen name={Routes.EditProfile} component={EditProfile} />
      <Stack.Screen name={Routes.Reviews} component={Reviews} />
      <Stack.Screen name={Routes.Earnings} component={Earnings} />
      <Stack.Screen
        name={Routes.ManageVehicleTabs}
        component={ManageVehicleTabs}
      />
      <Stack.Screen name={Routes.VehicleDetails} component={VehicleDetails} />
      <Stack.Screen name={Routes.ManageDriver} component={ManageDriver} />
      <Stack.Screen name={Routes.DriverDetails} component={DriverDetails} />
      <Stack.Screen name={Routes.TrackScreen} component={TrackScreen} />
      <Stack.Screen name={Routes.OfferDealTabs} component={OfferDealTabs} />
      <Stack.Screen name={Routes.BasicPriceTabs} component={BasicPriceTabs} />
      <Stack.Screen name={Routes.SubscribeTabs} component={SubscribeTabs} />
      <Stack.Screen name={Routes.Language} component={Language} />
      <Stack.Screen name={Routes.OnlineCardTabs} component={OnlineCardTabs} />
      <Stack.Screen
        name={Routes.ManagePeriodicRates}
        component={ManagePeriodicRates}
      />

      <Stack.Screen
        name={Routes.ManageBasicRates}
        component={ManageBasicRates}
      />
      <Stack.Screen
        name={Routes.PeriodicPriceTabs}
        component={PeriodicPriceTabs}
      />
      <Stack.Screen
        name={Routes.VehicleStatusTabs}
        component={VehicleStatusTabs}
      />
      <Stack.Screen
        name={Routes.TrackVehicleTabs}
        component={TrackVehicleTabs}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
