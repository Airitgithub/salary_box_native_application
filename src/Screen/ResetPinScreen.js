import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../Components/Color';
import { useNavigation } from '@react-navigation/native';

const ResetPinScreen = () => {
    const navigation=useNavigation();
    const [pin, setPin] = useState(['', '', '', '']);
    const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
    const pinRefs = Array(4).fill().map(() => React.createRef());
    const confirmPinRefs = Array(4).fill().map(() => React.createRef());

    const handlePinChange = (text, index, isConfirm = false) => {
        const newPin = isConfirm ? [...confirmPin] : [...pin];
        newPin[index] = text;

        if (isConfirm) {
            setConfirmPin(newPin);
        } else {
            setPin(newPin);
        }

        if (text && index < 3) {
            (isConfirm ? confirmPinRefs : pinRefs)[index + 1].current.focus();
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
            <View style={{ marginTop: 100 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 10 }}>
                    Set 4 digit login PIN
                </Text>
                <View style={{ flexDirection: 'row', gap: 5, marginBottom: 20 }}>
                    {pin.map((digit, index) => (
                        <TextInput
                            key={`pin-${index}`}
                            ref={pinRefs[index]}
                            style={{
                                flex: 1,
                                height: 50,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                                textAlign: 'center',
                                fontSize: 18,
                            }}
                            value={digit}
                            onChangeText={(text) => handlePinChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            secureTextEntry
                        />
                    ))}
                </View>

                <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 10 }}>
                    Confirm login PIN
                </Text>
                <View style={{ flexDirection: 'row', gap: 5, marginBottom: 20 }}>
                    {confirmPin.map((digit, index) => (
                        <TextInput
                            key={`confirm-${index}`}
                            ref={confirmPinRefs[index]}
                            style={{
                                flex: 1,
                                height: 50,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                                textAlign: 'center',
                                fontSize: 18,
                            }}
                            value={digit}
                            onChangeText={(text) => handlePinChange(text, index, true)}
                            keyboardType="numeric"
                            maxLength={1}
                            secureTextEntry
                        />
                    ))}
                </View>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("LoginPinScreen")}
                activeOpacity={0.6}
                style={{
                    borderRadius: 5,
                    backgroundColor: COLORS.green,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    flexDirection: 'row',
                    gap: 5,
                    position: 'absolute',
                    bottom: 20,
                    width: '100%',
                    alignSelf: 'center',
                }}
            >
                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: '600' }}>
                    Set PIN
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ResetPinScreen;