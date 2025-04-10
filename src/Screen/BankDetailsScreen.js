import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../Components/Color'; // Ensure this file exists
import { useNavigation } from '@react-navigation/native';
import CustomVectorIcons from '../Components/CustomVectorIcons'; // Ensure this component exists

const BankDetailsScreen = ({ staffData = null }) => {
    const navigation = useNavigation();
    const [selectedPayment, setSelectedPayment] = useState('bank'); // Default to 'bank'

    // Default fallback data if no staffData is provided
    const defaultStaffData = {
        accountHolderName: 'Khalid Than',
        accountNumber: '234565787654',
        bankName: 'Punjab Bank',
        ifscCode: 'PNJ553456',
        isVerified: false,
    };

    // Use provided staffData or fallback to default
    const accountDetails = staffData || defaultStaffData;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* Header */}
            <View
                style={{
                    width: '100%',
                    padding: 10,
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    paddingVertical: 15,
                    borderBottomColor: COLORS.bgCard,
                    borderBottomWidth: 1,
                    elevation: 10,
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomVectorIcons name={'arrowleft'} color={COLORS.black} size={24} iconSet={'AntDesign'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: COLORS.black, fontWeight: '600' }}>Current Employment</Text>
            </View>

            {/* Payment Selection */}
            <View
                style={{
                    marginTop: 20,
                    paddingHorizontal: 20,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                }}
            >
                {/* Bank Account Option (First Box) */}
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setSelectedPayment('bank')}
                    style={{
                        borderWidth: selectedPayment === 'bank' ? 0.5 : 0.3,
                        borderColor: selectedPayment === 'bank' ? COLORS.green : COLORS.gray,
                        borderRadius: 10,
                        backgroundColor: selectedPayment === 'bank' ? COLORS.bgCard : COLORS.white,
                        width: '48%',
                        flexDirection: 'row',
                        gap: 10,
                        padding: 10,
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: COLORS.green,
                            backgroundColor: selectedPayment === 'bank' ? COLORS.green : COLORS.white,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: selectedPayment === 'bank' ? COLORS.green : COLORS.black,
                        }}
                    >
                        Bank Account
                    </Text>
                </TouchableOpacity>

                {/* UPI Option (Second Box) */}
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setSelectedPayment('upi')}
                    style={{
                        borderWidth: selectedPayment === 'upi' ? 0.5 : 0.3,
                        borderColor: selectedPayment === 'upi' ? COLORS.green : COLORS.gray,
                        borderRadius: 10,
                        backgroundColor: selectedPayment === 'upi' ? COLORS.bgCard : COLORS.white,
                        width: '48%',
                        flexDirection: 'row',
                        gap: 10,
                        padding: 10,
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: COLORS.green,
                            backgroundColor: selectedPayment === 'upi' ? COLORS.green : COLORS.white,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: selectedPayment === 'upi' ? COLORS.green : COLORS.black,
                        }}
                    >
                        UPI
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Staff Account Details */}
            <Text
                style={{
                    paddingHorizontal: 20,
                    marginTop: 25,
                    fontSize: 16,
                    fontWeight: '500',
                }}
            >
                Staff Account Details
            </Text>
            <View
                style={{
                    backgroundColor: COLORS.bgCard,
                    padding: 12,
                    marginHorizontal: 20,
                    borderRadius: 5,
                    marginTop: 10,
                }}
            >
                <View style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 12, color: COLORS.green, fontWeight: '400' }}>Account Holder Name</Text>
                    <Text style={{ fontSize: 15, color: COLORS.black, fontWeight: '450' }}>
                        {accountDetails.accountHolderName}
                    </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 12, color: COLORS.green, fontWeight: '400' }}>Account Number</Text>
                    <Text style={{ fontSize: 15, color: COLORS.black, fontWeight: '450' }}>
                        {accountDetails.accountNumber}
                    </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 12, color: COLORS.green, fontWeight: '400' }}>Bank Name</Text>
                    <Text style={{ fontSize: 15, color: COLORS.black, fontWeight: '450' }}>
                        {accountDetails.bankName}
                    </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 12, color: COLORS.green, fontWeight: '400' }}>IFSC Code</Text>
                    <Text style={{ fontSize: 15, color: COLORS.black, fontWeight: '450' }}>
                        {accountDetails.ifscCode}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                    }}
                >
                    <CustomVectorIcons name={'alert-circle-outline'} color={COLORS.red} size={24} iconSet={'Ionicons'} />
                    <Text style={{ fontSize: 14, color: COLORS.red, fontWeight: '400' }}>
                        {accountDetails.isVerified ? 'Verified' : 'Not Verified! Check Details Now'}
                    </Text>
                </View>
            </View>

            {/* Footer with Save Button */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: 60,
                    elevation: 5,
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.green,
                        borderRadius: 5,
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        alignSelf: 'center',
                    }}
                    onPress={() => {
                        console.log('Saving details:', accountDetails);
                    }}
                >
                    <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>Save Details</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BankDetailsScreen;