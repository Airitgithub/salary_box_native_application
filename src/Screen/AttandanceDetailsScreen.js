import { View, Text, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { COLORS } from '../Components/Color';

const AttandanceDetailsScreen = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View
                style={{
                    width: '100%',
                    padding: 10,
                    backgroundColor: "#1E1E1E",
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    paddingVertical: 15,
                    borderBottomColor: COLORS.bgCard,
                    borderBottomWidth: 1,
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomVectorIcons name={'arrowleft'} color={COLORS.white} size={24} iconSet={'AntDesign'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: COLORS.white, fontWeight: '600' }}>Attendance Details</Text>
            </View>
            <View style={{ gap: 10, padding: 20 }}>
                <TouchableOpacity style={{ width: "100%", backgroundColor: COLORS.white, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Work Timings</Text>
                    <CustomVectorIcons name={"keyboard-arrow-right"} color={COLORS.black} size={24} iconSet={"MaterialIcons"} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "100%", backgroundColor: COLORS.white, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Attendance Modes</Text>
                    <CustomVectorIcons name={"keyboard-arrow-right"} color={COLORS.black} size={24} iconSet={"MaterialIcons"} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "100%", backgroundColor: COLORS.white, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Automation Rules</Text>
                    <CustomVectorIcons name={"keyboard-arrow-right"} color={COLORS.black} size={24} iconSet={"MaterialIcons"} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: "100%",
                        backgroundColor: COLORS.white,
                        borderRadius: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 15
                    }}
                    activeOpacity={0.7} // Makes the button slightly responsive when clicked
                >
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Staff can view own attendance</Text>

                    <Switch
                        trackColor={{ false: COLORS.gray, true: COLORS.primary }} // Customize colors
                        thumbColor={isEnabled ? COLORS.white : COLORS.black} // Toggle button color
                        ios_backgroundColor={COLORS.gray} // Default background color for iOS
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AttandanceDetailsScreen



    // android: roundIcon = "@mipmap/ic_launcher_round" 