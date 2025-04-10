import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screen/SplashScreen'; 
import AuthenticScreen from '../Screen/AuthenticScreen';
import LoginPinScreen from '../Screen/LoginPinScreen';
import ResetScreen from '../Screen/ResetScreen';
import BottomTabNavigator from './BottomRoutes';
import ResetPinScreen from '../Screen/ResetPinScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import RequestLeaveScreen from '../Screen/RequestLeaveScreen';
import ViewAttendanceScreen from '../Screen/ViewAttendanceScreen';
import ProfileScreenDetail from '../Screen/ProfileScreenDetail';
import PersonalDetails from '../Screen/PersonalDetailsScreen';
import PersonalDetailsScreen from '../Screen/PersonalDetailsScreen';
import CurrentEmlpoymentScreen from '../Screen/CurrentEmlpoymentScreen';
import AttandanceDetailsScreen from '../Screen/AttandanceDetailsScreen';
import MoreSettingsScreen from '../Screen/MoreSettingsScreen';
import BankDetailsScreen from '../Screen/BankDetailsScreen';
import HolidayListScreen from '../Screen/HolidayListScreen';
import NoteScreen from '../Screen/NoteScreen';
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNavigator">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AuthenticScreen" component={AuthenticScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPinScreen" component={LoginPinScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetScreen" component={ResetScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPinScreen" component={ResetPinScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RequestLeaveScreen" component={RequestLeaveScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ViewAttendanceScreen" component={ViewAttendanceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreenDetail" component={ProfileScreenDetail} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CurrentEmlpoymentScreen" component={CurrentEmlpoymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AttandanceDetailsScreen" component={AttandanceDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MoreSettingsScreen" component={MoreSettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BankDetailsScreen" component={BankDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HolidayListScreen" component={HolidayListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NoteScreen" component={NoteScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
