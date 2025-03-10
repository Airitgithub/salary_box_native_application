import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import { COLORS } from '../Components/Color';
import MarkAttendance from '../Screen/MarkAttendance';
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
                    let label;

                    switch (route.name) {
                        case 'MarkAttendance':
                            imageSource = IMAGES.Attendance;
                            label = "Attendance";
                            break;
                        case 'LeavesScreen':
                            imageSource = IMAGES.Leaves;
                            label = "Leaves";
                            break;
                        case 'ProfileScreen':
                            imageSource = IMAGES.Profile;
                            label = "Profile";
                            break;
                        default:
                            imageSource = null;
                            label = "";
                    }

                    return (
                        <View style={{ alignItems: 'center' }}>
                            {imageSource && (
                                <Image
                                    source={imageSource}
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: focused ? COLORS.gradient : COLORS.gray ,
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
            <Tab.Screen name="MarkAttendance" component={MarkAttendance} />
            <Tab.Screen name="LeavesScreen" component={LeavesScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
