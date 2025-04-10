import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { IMAGES } from '../Components/Images';
import { COLORS } from '../Components/Color';
import fontFamily from '../Components/fontfamily';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AuthenticScreen = ({ navigation }) => {
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Enter a valid 10-digit phone number')
            .required('Phone number is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .required('Password is required'),
    });

    const handleNext = async (values) => {
        try {
            // Simulate API call
            await axios.post('https://example.com/api/verify', values);
            setIsSuccessModalVisible(true);
            setTimeout(() => {
                setIsSuccessModalVisible(false);
                navigation.navigate("LoginPinScreen", { phoneNumber: values.phoneNumber });
            }, 2000);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Something went wrong. Please try again.',
                position: 'top',
                visibilityTime: 3000,
                topOffset: 50,
                style: { backgroundColor: COLORS.red },
            });
        }
    };

    return (
        <SafeAreaView style={{ marginHorizontal: 20, marginTop: 20, flex: 1 }}>
            {/* Header */}
            <View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image
                        source={IMAGES.SalaryBox}
                        style={{ height: 35, width: 35 }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.purple }}>
                            Salary
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#32CD32' }}>
                            Box
                        </Text>
                    </View>
                </View>
                <Text
                    style={{
                        fontWeight: '400',
                        color: COLORS.gradient,
                        fontSize: 14,
                        marginTop: 5,
                    }}
                >
                    Best Attendance App
                </Text>
            </View>

            <Formik
                initialValues={{ phoneNumber: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleNext}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        {/* Prompt */}
                        <Text
                            style={{
                                marginTop: 50,
                                fontFamily: fontFamily.PoppinsSemiBold,
                                fontSize: 16,
                                color: COLORS.black,
                            }}
                        >
                            Enter your Phone number to get Started
                        </Text>

                        {/* Phone Input */}
                        <View
                            style={{
                                marginVertical: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <Image source={IMAGES.Flag} style={{ height: 30, width: 30 }} />
                            <View
                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}
                            >
                                <Text style={{ color: COLORS.black, fontSize: 16 }}>+91</Text>
                                <CustomVectorIcons
                                    name="arrow-drop-down"
                                    size={24}
                                    color={COLORS.black}
                                    iconSet="MaterialIcons"
                                />
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 1,
                                    borderColor: COLORS.gray,
                                    borderRadius: 5,
                                    marginLeft: 10,
                                }}
                            >
                                <TextInput
                                    placeholder="Enter Your Number"
                                    placeholderTextColor={COLORS.gray}
                                    style={{ fontSize: 14, padding: 8 }}
                                    keyboardType="phone-pad"
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber}
                                    maxLength={10}
                                />
                            </View>
                        </View>
                        {touched.phoneNumber && errors.phoneNumber && (
                            <Text style={{ color: COLORS.red }}>{errors.phoneNumber}</Text>
                        )}

                        {/* Password Input */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5, paddingHorizontal: 10 }}>
                            <TextInput
                                placeholder="Enter Your Password"
                                placeholderTextColor={COLORS.gray}
                                style={{ flex: 1, fontSize: 14, paddingVertical: 8 }}
                                secureTextEntry={!isPasswordVisible}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <CustomVectorIcons
                                    name={isPasswordVisible ? "visibility" : "visibility-off"}
                                    size={24}
                                    color={COLORS.black}
                                    iconSet="MaterialIcons"
                                />
                            </TouchableOpacity>
                        </View>
                        {touched.password && errors.password && (
                            <Text style={{ color: COLORS.red }}>{errors.password}</Text>
                        )}

                        {/* Footer */}
                        <View style={{ position: "absolute", bottom: 0, width: '100%' }}>
                            <View style={{
                                width: "100%",
                                backgroundColor: "#ADD8E6",
                                flexDirection: 'row',
                                alignItems: "center",
                                borderRadius: 5,
                                justifyContent: "space-between",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                marginBottom: 10
                            }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 16, color: COLORS.gradient, fontWeight: "400" }}>Trusted by</Text>
                                    <Text style={{ fontSize: 16, color: COLORS.gradient, fontWeight: "600" }}> 10 Lakh+</Text>
                                    <Text style={{ fontSize: 16, color: COLORS.gradient, fontWeight: "400" }}> businesses</Text>
                                </View>
                                <View>
                                    <Image source={IMAGES.Yes} style={{ height: 50, width: 50 }} />
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                activeOpacity={0.6}
                                style={{
                                    borderRadius: 5,
                                    backgroundColor: COLORS.green,
                                    marginVertical: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingVertical: 15,
                                    flexDirection: "row",
                                    gap: 5
                                }}
                            >
                                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: "600" }}>Continue</Text>
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
                        </View>
                    </>
                )}
            </Formik>

            {/* Success Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSuccessModalVisible}
                onRequestClose={() => setIsSuccessModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        borderRadius: 20,
                        padding: 35,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: COLORS.gradient,
                            marginBottom: 15,
                        }}>Success!</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            marginBottom: 15,
                            textAlign: 'center',
                        }}>Phone number verified successfully</Text>
                        <CustomVectorIcons
                            name="checkmark-circle"
                            size={50}
                            color={COLORS.gradient}
                            iconSet="Ionicons"
                        />
                    </View>
                </View>
            </Modal>

            {/* Toast Component */}
            <Toast />
        </SafeAreaView>
    );
};

export default AuthenticScreen;