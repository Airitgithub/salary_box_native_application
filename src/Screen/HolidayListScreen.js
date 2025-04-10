import { View, Text, SafeAreaView, TouchableOpacity, Modal, FlatList } from 'react-native';
import React, { useState } from 'react';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { COLORS } from '../Components/Color';
import { useNavigation } from '@react-navigation/native';

const HolidayListScreen = () => {
    const navigation = useNavigation();
    const [selectedYear, setSelectedYear] = useState('2025');
    const [tempSelectedYear, setTempSelectedYear] = useState('2025');
    const [modalVisible, setModalVisible] = useState(false);

    const years = ['2024', '2025', '2026', '2027', '2028'];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* Header Section */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 15,
                backgroundColor: '#1E1E1E',
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 5 }}>
                    <CustomVectorIcons
                        name="arrowleft"
                        color={COLORS.white}
                        size={24}
                        iconSet="AntDesign"
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: COLORS.white,
                    flex: 1,
                    marginLeft: 10,
                }}>
                    Holiday List
                </Text>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: COLORS.white,
                        borderRadius: 25,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        borderWidth: 1,
                        borderColor: COLORS.border,
                        elevation: 2,
                    }}
                >
                    <CustomVectorIcons
                        name="calendar-today"
                        iconSet="MaterialCommunityIcons"
                        color={COLORS.black}
                        size={20}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: COLORS.black,
                        marginHorizontal: 5,
                    }}>
                        {selectedYear}
                    </Text>
                    <CustomVectorIcons
                        name="arrow-drop-down"
                        iconSet="MaterialIcons"
                        color={COLORS.black}
                        size={22}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: COLORS.white, alignItems: "center" }}>
                <View style={{marginTop:50,width:"70%",gap:5}}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: COLORS.black, textAlign: "center" }}>No holidays added</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", color: COLORS.gray, textAlign: "center" }}>No holiday have been added by admin.</Text>
                </View>
            </View>

            {/* Year Selection Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}>
                    <View style={{
                        width: 320,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 15,
                        padding: 20,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: 10,
                        }}>
                            Select Year
                        </Text>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: COLORS.green,
                            textAlign: 'center',
                            marginBottom: 20,
                            backgroundColor: '#E3F2FD',
                            paddingVertical: 8,
                            borderRadius: 10,
                        }}>
                            {tempSelectedYear}
                        </Text>

                        <FlatList
                            data={years}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{
                                        paddingVertical: 14,
                                        paddingHorizontal: 20,

                                        alignItems: "center"
                                    }}
                                    onPress={() => setTempSelectedYear(item)}
                                >
                                    <Text style={{
                                        fontSize: tempSelectedYear === item ? 20 : 16,
                                        fontWeight: tempSelectedYear === item ? 'bold' : 'normal',
                                        color: tempSelectedYear === item ? COLORS.green : '#333',

                                    }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )}
                            style={{ maxHeight: 200 }}
                            showsVerticalScrollIndicator={false}
                        />

                        {/* Buttons */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20,
                        }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={{
                                    flex: 1,
                                    paddingVertical: 12,
                                    alignItems: 'center',
                                    backgroundColor: '#FFF',
                                    borderRadius: 10,
                                    marginRight: 10,
                                    borderWidth: 1,
                                    borderColor: '#FF4D4D',
                                }}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: '#FF4D4D',
                                    fontWeight: '600',
                                }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedYear(tempSelectedYear);
                                    setModalVisible(false);
                                }}
                                style={{
                                    flex: 1,
                                    paddingVertical: 12,
                                    alignItems: 'center',
                                    backgroundColor: COLORS.green,
                                    borderRadius: 10,
                                }}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: '#FFF',
                                    fontWeight: '600',
                                }}>
                                    OK
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
};

export default HolidayListScreen;