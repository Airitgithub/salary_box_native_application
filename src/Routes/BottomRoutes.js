import React, { lazy } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import { COLORS } from '../Components/Color';
const MarkAttendance = lazy(() => import('../Screen/MarkAttendance'));
import LeavesScreen from '../Screen/LeavesScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { IMAGES } from '../Components/Images';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    height: 70,
                    position: 'absolute',
                    elevation: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingBottom: 10,
                },
                tabBarShowLabel: true,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: 5,
                },
                tabBarIcon: ({ focused }) => {
                    let imageSource;

                    switch (route.name) {
                        case 'MarkAttendance':
                            imageSource = IMAGES.Attendance;
                            break;
                        case 'LeavesScreen':
                            imageSource = IMAGES.Leaves;
                            break;
                        case 'ProfileScreen':
                            imageSource = IMAGES.Profile;
                            break;
                        default:
                            imageSource = null;
                    }

                    return (
                        <View style={{ alignItems: 'center' }}>
                            {imageSource && (
                                <Image
                                    source={imageSource}
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: focused ? COLORS.gradient : COLORS.gray,
                                    }}
                                    resizeMode="contain"
                                />
                            )}
                        </View>
                    );
                },
                tabBarActiveTintColor: COLORS.gradient, // Change text color when active
                headerShown: false, // Hides header on all screens
            })}
        >
            <Tab.Screen
                name="MarkAttendance"
                component={MarkAttendance}
                options={{ tabBarLabel: 'Attendance' }} // Custom label
            />
            <Tab.Screen
                name="LeavesScreen"
                component={LeavesScreen}
                options={{ tabBarLabel: 'Leaves' }} // Custom label
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }} // Custom label
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;