import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from './Color';
import { useNavigation } from '@react-navigation/native';

const RequestComponent = () => {
    const navigation=useNavigation()
    return (
        <ScrollView style={{
            marginTop: 10,
            flex: 1
        }}>
            {/* Leave Balance Header */}
            <Text style={{
                fontSize: 16,
                fontWeight: "600",
                paddingLeft: 20
            }}>
                Leave Balance
            </Text>

            {/* Leave Balance Row */}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
                paddingHorizontal: 20
            }}>
                {/* Privilege Leave */}
                <View style={{ alignItems: "center" }}>
                    <Text style={{
                        color: COLORS.gray,
                        fontWeight: "500"
                    }}>
                        Privilege Leave
                    </Text>
                    <Text style={{ fontWeight: "500" }}>
                        0
                    </Text>
                </View>

                {/* Vertical Divider */}
                <View style={{
                    width: 1,
                    height: 40,
                    backgroundColor: COLORS.gray
                }} />

                {/* Sick Leave */}
                <View style={{ alignItems: "center" }}>
                    <Text style={{
                        color: COLORS.gray,
                        fontWeight: "500"
                    }}>
                        Sick Leave
                    </Text>
                    <Text style={{ fontWeight: "500" }}>
                        0
                    </Text>
                </View>

                {/* Vertical Divider */}
                <View style={{
                    width: 1,
                    height: 40,
                    backgroundColor: COLORS.gray
                }} />

                {/* Casual Leave */}
                <View style={{ alignItems: "center" }}>
                    <Text style={{
                        color: COLORS.gray,
                        fontWeight: "500"
                    }}>
                        Casual Leave
                    </Text>
                    <Text style={{ fontWeight: "500" }}>
                        0
                    </Text>
                </View>
            </View>

            {/* Section Divider */}
            <View style={{
                width: "100%",
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 2,
                marginTop: 30
            }} />

            {/* Pending Request Section */}
            <Text style={{
                padding: 20,
                fontSize: 16,
                fontWeight: '600'
            }}>
                Pending Request
            </Text>
            <View style={{
                width: "100%",
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 0.5
            }} />

            {/* No Pending Requests Message */}
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50
            }}>
                <Text style={{
                    color: COLORS.gray,
                    fontSize: 18,
                    fontWeight: "600"
                }}>
                    No Pending Requests
                </Text>
            </View>

            {/* Request Leave Button */}
            <TouchableOpacity 
                onPress={() => navigation.navigate("RequestLeaveScreen")}
            style={{
                width: 150,
                height: 45,
                borderRadius: 25,
                backgroundColor: COLORS.green,
                position: "absolute",
                top: 550,
                right: 10,
                justifyContent: "center",
                alignItems: "center",
                elevation: 15
            }}>
                <Text style={{
                    color: COLORS.white,
                    fontWeight: "500",
                    fontSize: 14
                }}>
                    Request Leave
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default RequestComponent;