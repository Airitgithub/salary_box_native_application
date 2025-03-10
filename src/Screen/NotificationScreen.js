import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS } from '../Components/Color'
import CustomVectorIcons from '../Components/CustomVectorIcons'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from '../Components/Images'

const NotificationScreen = () => {
    const navigation = useNavigation();

    // Multiple notification data
    const notifications = [
        {
            id: '1',
            name: 'Abid Abbasi',
            action: 'has punched in',
            time: '10:23',
            device: 'Biometric -ZYRF123432',
            date: '8 March'
        },
        {
            id: '2',
            name: 'Sarah Khan',
            action: 'has punched out',
            time: '18:45',
            device: 'Mobile -ABC987',
            date: '8 March'
        },
        {
            id: '3',
            name: 'John Doe',
            action: 'has punched in',
            time: '09:15',
            device: 'Biometric -XYZ456789',
            date: '8 March'
        },
        {
            id: '4',
            name: 'Maria Smith',
            action: 'has punched in',
            time: '08:55',
            device: 'Mobile -DEF123',
            date: '7 March'
        },
        {
            id: '5',
            name: 'Ahmed Raza',
            action: 'has punched out',
            time: '19:30',
            device: 'Biometric -ZYRF123432',
            date: '7 March'
        },
        {
            id: '6',
            name: 'Emma Wilson',
            action: 'has punched in',
            time: '09:30',
            device: 'Mobile -GHI456',
            date: '6 March'
        }
    ];

    const renderNotificationItem = ({ item }) => (
        <View style={{
            marginTop: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: COLORS.white,
            padding: 10
        }}>
            <View style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center"
            }}>
                <Image
                    source={IMAGES.Profile}
                    style={{
                        height: 30,
                        width: 30,
                        borderRadius: 15
                    }}
                />
                <View style={{ gap: 5 }}>
                    <Text style={{ fontWeight: "700" }}>
                        {item.name} {item.action}
                    </Text>
                    <Text style={{
                        fontWeight: "400",
                        color: COLORS.gray
                    }}>
                        {item.time} | {item.device}
                    </Text>
                </View>
            </View>
            <Text>{item.date}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                backgroundColor: "#FAFAFA",
                paddingVertical: 10,
                paddingHorizontal: 20,
                flexDirection: "row",
                gap: 10,
                alignItems: "center"
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomVectorIcons
                        name={"arrowleft"}
                        size={24}
                        color={COLORS.black}
                        iconSet={"AntDesign"}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                    Notifications
                </Text>
            </View>

            <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <Text>No notifications available</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

export default NotificationScreen;


