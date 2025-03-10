import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { COLORS } from '../Components/Color';
import { useNavigation, useRoute } from '@react-navigation/native';

const LoginPinScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const phoneNumber = route.params?.phoneNumber || "N/A"; 
    const [pin, setPin] = useState(["", "", "", ""]); // PIN state for 4 digits
    const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // Refs for inputs

    // Function to handle input changes
    const handleChange = (text, index) => {
        let newPin = [...pin];
        if (text.length > 1) {
            text = text.charAt(text.length - 1); // Take only the last digit if pasted
        }
        newPin[index] = text;
        setPin(newPin);
        if (text && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    // Handle backspace, clear field and move focus back
    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === "Backspace") {
            let newPin = [...pin];
            newPin[index] = "";
            setPin(newPin);
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };

    // Handle Continue button press (optional logic)
    const handleContinue = () => {
        const enteredPin = pin.join("");

        if (enteredPin.length === 4) {
            console.log("✅ PIN Submitted:", enteredPin);
            navigation.replace("BottomTabNavigator"); // Navigate to BottomTabNavigator
        } else {
            alert("❌ Please enter a valid 4-digit PIN!"); // Show error
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
                <CustomVectorIcons name={"arrow-back"} size={24} color={COLORS.black} iconSet={"Ionicons"} />
            </TouchableOpacity>

            {/* PIN Entry Section */}
            <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 50 }}>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>Enter login PIN for</Text>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>+91 - {phoneNumber}</Text>

                {/* PIN Input Fields */}
                <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
                    {pin.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            value={digit}
                            onChangeText={(text) => handleChange(text.replace(/[^0-9]/g, ""), index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            maxLength={1}
                            keyboardType="numeric"
                            style={{
                                width: 50,
                                height: 50,
                                borderWidth: 2,
                                borderColor: COLORS.gray,
                                borderRadius: 10,
                                textAlign: "center",
                                fontSize: 20,
                                fontWeight: "bold",
                                color: COLORS.black
                            }}
                        />
                    ))}
                </View>

                {/* Forget PIN Section */}
                <View style={{ flexDirection: "row", marginVertical: 20 }}>
                    <Text>Forgot PIN? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ResetScreen", { phoneNumber: phoneNumber })} 
                    >
                        <Text style={{ color: COLORS.purple, fontWeight: "600" }}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                onPress={handleContinue}
                activeOpacity={0.6}
                style={{
                    borderRadius: 5,
                    backgroundColor: COLORS.green,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 10,
                    flexDirection: "row",
                    gap: 5,
                    position: "absolute",
                    bottom: 20,
                    width: "100%",
                    alignSelf: "center"
                }}
            >
                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: "600" }}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LoginPinScreen;