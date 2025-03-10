import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../Components/Color';
import CustomVectorIcons from '../Components/CustomVectorIcons';

const ResetScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const phoneNumber = route.params?.phoneNumber || "N/A"; 
    const [otp, setOtp] = useState(["", "", "", "", "", ""]); 
    const inputRefs = Array(6).fill().map(() => useRef()); // 

    const [timer, setTimer] = useState(60); // 30-second timer
    const [isResendDisabled, setIsResendDisabled] = useState(true); 

   
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setIsResendDisabled(false); 
        }
    }, [timer]);

   
    const handleChange = (text, index) => {
        let newOtp = [...otp];

        if (text.length > 1) {
            text = text.charAt(text.length - 1);
        }

        newOtp[index] = text;
        setOtp(newOtp);

        // Move focus to next input if text is entered
        if (text && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    // Handle backspace, clear field, and move focus back
    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === "Backspace") {
            let newOtp = [...otp];

            // Clear current field
            newOtp[index] = "";
            setOtp(newOtp);

            // Move cursor back if not the first box
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };

    // Handle OTP Resend
    const handleResendOtp = () => {
        setTimer(60); // Reset timer to 30 seconds
        setIsResendDisabled(true); // Disable resend button
        console.log("OTP Resent"); // Replace with API call
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>

            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
                <CustomVectorIcons name={"arrow-back"} size={24} color={COLORS.black} iconSet={"Ionicons"} />
            </TouchableOpacity>

            {/* OTP Entry Section */}
            <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 50 }}>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>Enter OTP sent to</Text>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>+91 - {phoneNumber}</Text>

                {/* OTP Input Fields */}
                <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            value={digit}
                            onChangeText={(text) => handleChange(text.replace(/[^0-9]/g, ""), index)} // Allow only numbers
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

                {/* Resend OTP with Timer */}
                <View style={{ flexDirection: "row", marginVertical: 20, alignItems: "center" }}>
                    {isResendDisabled ? (
                        <Text style={{ fontSize: 16, fontWeight: "600", color: COLORS.gray }}>
                            Resend OTP in {timer}s
                        </Text>
                    ) : (
                        <TouchableOpacity onPress={handleResendOtp}>
                            <Text style={{ fontSize: 16, fontWeight: "600", color: COLORS.purple }}>
                                RESEND OTP
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate("ResetPinScreen")} 
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
                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: "600" }}>Reset PIN</Text>
                <View
                    style={{
                        height: 25,
                        width: 25,
                        borderRadius: 20,
                        backgroundColor: COLORS.white,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <CustomVectorIcons
                        name={"arrow-forward"}
                        size={24}
                        color={COLORS.green}
                        iconSet={"Ionicons"}
                    />
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default ResetScreen;
