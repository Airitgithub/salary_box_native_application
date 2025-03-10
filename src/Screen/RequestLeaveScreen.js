// import {
//     View,
//     Text,
//     SafeAreaView,
//     TouchableOpacity,
//     TextInput,
//     Modal,
//     FlatList,
//     ScrollView
// } from 'react-native';
// import React, { useState } from 'react';
// import CustomVectorIcons from '../Components/CustomVectorIcons';
// import { COLORS } from '../Components/Color';
// import { useNavigation } from '@react-navigation/native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const RequestLeaveScreen = () => {
//     const navigation = useNavigation();
//     const [modalVisible, setModalVisible] = useState(false);
//     const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false);
//     const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
//     const [fromDate, setFromDate] = useState(new Date());
//     const [toDate, setToDate] = useState(new Date());
//     const [isHalfDay, setIsHalfDay] = useState(false);
//     const [requestedLeaveDays, setRequestedLeaveDays] = useState(1);
//     const [leaveTypeModal, setLeaveTypeModal] = useState(false);
//     const [selectedLeave, setSelectedLeave] = useState("Casual Leave");
//     const [availableLeaveBalance, setAvailableLeaveBalance] = useState(5);
//     const [reason, setReason] = useState('');
//     const leaveTypes = [
//         { type: "Casual Leave", balance: 5 },
//         { type: "Privilege Leave", balance: 0 },
//         { type: "Sick Leave", balance: 0 },
//     ];

//     // Function to calculate days between dates
//     const calculateLeaveDays = (startDate, endDate, halfDay) => {
//         if (halfDay) {
//             setRequestedLeaveDays(0.5);
//         } else {
//             const diffTime = Math.abs(endDate - startDate);
//             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
//             setRequestedLeaveDays(diffDays);
//         }
//     };

//     // Format date to string
//     const formatDate = (date) => {
//         return date.toLocaleDateString('en-US', {
//             day: 'numeric',
//             month: 'long',
//             year: 'numeric'
//         });
//     };

//     // Handle date confirmations
//     const handleFromDateConfirm = (date) => {
//         setFromDate(date);
//         if (date > toDate) setToDate(date);
//         calculateLeaveDays(date, toDate, isHalfDay);
//         setFromDatePickerVisibility(false);
//     };

//     const handleToDateConfirm = (date) => {
//         setToDate(date);
//         calculateLeaveDays(fromDate, date, isHalfDay);
//         setToDatePickerVisibility(false);
//     };

//     // Handle half-day toggle
//     const toggleHalfDay = () => {
//         setIsHalfDay(!isHalfDay);
//         calculateLeaveDays(fromDate, toDate, !isHalfDay);
//         if (!isHalfDay) {
//             setToDate(fromDate);
//         }
//     };

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//             {/* Static Header */}
//             <View style={{
//                 width: "100%",
//                 padding: 10,
//                 backgroundColor: "#1E1E1E",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 10,
//                 paddingVertical: 15
//             }}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <CustomVectorIcons
//                         name={"arrowleft"}
//                         color={COLORS.white}
//                         size={24}
//                         iconSet={"AntDesign"}
//                     />
//                 </TouchableOpacity>
//                 <Text style={{
//                     fontSize: 16,
//                     color: COLORS.white,
//                     fontWeight: "600"
//                 }}>
//                     Request Leave
//                 </Text>
//             </View>

//             {/* Scrollable Content */}
//             <ScrollView style={{ flex: 1 }}>
//                 {/* Date Inputs */}
//                 <View style={{
//                     flexDirection: "row",
//                     marginTop: 20,
//                     paddingHorizontal: 20,
//                     gap: 20,
//                     justifyContent: "space-between"
//                 }}>
//                     <View style={{ flex: 1, gap: 10 }}>
//                         <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>
//                             From date *
//                         </Text>
//                         <TouchableOpacity
//                             onPress={() => setFromDatePickerVisibility(true)}
//                             style={{
//                                 width: "100%",
//                                 borderWidth: 1,
//                                 borderColor: COLORS.gray,
//                                 borderRadius: 5,
//                                 paddingVertical: 2
//                             }}>
//                             <Text style={{ fontSize: 14, paddingVertical: 5, marginLeft: 5 }}>
//                                 {formatDate(fromDate)}
//                             </Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={{ flex: 1, gap: 10 }}>
//                         <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>
//                             To date *
//                         </Text>
//                         <TouchableOpacity
//                             onPress={() => !isHalfDay && setToDatePickerVisibility(true)}
//                             style={{
//                                 width: "100%",
//                                 borderWidth: 1,
//                                 borderColor: isHalfDay ? COLORS.gray : COLORS.gray,
//                                 borderRadius: 5,
//                                 padding: 2,
//                                 opacity: isHalfDay ? 0.5 : 1
//                             }}>
//                             <Text style={{ fontSize: 14, paddingVertical: 5, marginLeft: 5 }}>
//                                 {formatDate(toDate)}
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 {/* Date Pickers */}
//                 <DateTimePickerModal
//                     isVisible={isFromDatePickerVisible}
//                     mode="date"
//                     onConfirm={handleFromDateConfirm}
//                     onCancel={() => setFromDatePickerVisibility(false)}
//                     minimumDate={new Date()}
//                 />

//                 <DateTimePickerModal
//                     isVisible={isToDatePickerVisible}
//                     mode="date"
//                     onConfirm={handleToDateConfirm}
//                     onCancel={() => setToDatePickerVisibility(false)}
//                     minimumDate={fromDate}
//                 />

//                 {/* Half day checkbox */}
//                 <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 10, alignItems: "center", gap: 5 }}>
//                     <TouchableOpacity
//                         onPress={toggleHalfDay}
//                         style={{
//                             height: 18,
//                             width: 18,
//                             borderWidth: 2,
//                             borderColor: COLORS.gray,
//                             borderRadius: 2,
//                             backgroundColor: isHalfDay ? COLORS.green : 'transparent',
//                             justifyContent: 'center',
//                             alignItems: 'center'
//                         }}>
//                         {isHalfDay && (
//                             <CustomVectorIcons
//                                 name={"check"}
//                                 color={COLORS.white}
//                                 size={12}
//                                 iconSet={"AntDesign"}
//                             />
//                         )}
//                     </TouchableOpacity>
//                     <Text style={{ fontSize: 14, fontWeight: "600" }}>Request leave for half day</Text>
//                 </View>

//                 {/* Leave Type */}
//                 <View style={{ marginTop: 20, paddingHorizontal: 20, gap: 10 }}>
//                     <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>Leave Type *</Text>
//                     <TouchableOpacity
//                         onPress={() => setLeaveTypeModal(true)}
//                         style={{
//                             width: "100%",
//                             borderWidth: 1,
//                             borderColor: COLORS.gray,
//                             padding: 10,
//                             flexDirection: "row",
//                             justifyContent: "space-between",
//                             paddingVertical: 15,
//                             borderRadius:2
//                         }}
//                     >
//                         <Text style={{ fontSize: 16, color: COLORS.black, fontWeight: "500" }}>
//                             {selectedLeave} (balance: {availableLeaveBalance} days)
//                         </Text>
//                         <CustomVectorIcons name={"arrow-drop-down"} size={24} color={COLORS.black} iconSet={"MaterialIcons"} />
//                     </TouchableOpacity>

//                     {/* Modal for selecting leave type */}
//                     <Modal visible={leaveTypeModal} transparent animationType="slide">
//                         <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
//                             <View style={{ width: "80%", backgroundColor: "white", padding: 10, borderRadius: 2 }}>
//                                 <FlatList
//                                     data={leaveTypes}
//                                     keyExtractor={(item) => item.type}
//                                     renderItem={({ item }) => (
//                                         <TouchableOpacity
//                                             style={{
//                                                 paddingVertical: 10,
//                                             }}
//                                             onPress={() => {
//                                                 setSelectedLeave(item.type);
//                                                 setAvailableLeaveBalance(item.balance);
//                                                 setLeaveTypeModal(false);
//                                             }}
//                                         >
//                                             <Text style={{ fontSize: 16, color: COLORS.gray, fontWeight: "400" }}>
//                                                 {item.type} (balance: {item.balance} days)
//                                             </Text>
//                                         </TouchableOpacity>
//                                     )}
//                                 />
//                                 <TouchableOpacity
//                                     onPress={() => setLeaveTypeModal(false)}
//                                     style={{
//                                         marginTop: 15,
//                                         alignSelf: "center",
//                                         backgroundColor: COLORS.green,
//                                         paddingVertical: 10,
//                                         paddingHorizontal: 20,
//                                         borderRadius: 5
//                                     }}
//                                 >
//                                     <Text style={{ color: COLORS.white, fontWeight: "600", fontSize: 16 }}>Close</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </Modal>
//                 </View>

//                 {/* Reason */}
//                 <View style={{ marginTop: 20, paddingHorizontal: 20, gap: 10 }}>
//                     <Text style={{
//                         fontSize: 12,
//                         fontWeight: "500",
//                         color: COLORS.black
//                     }}>
//                         Reason of leave
//                     </Text>
//                     <View style={{
//                         width: "100%",
//                         borderWidth: 1,
//                         borderColor: COLORS.gray,
//                         padding: 5,
//                         borderRadius: 2,
//                     }}>
//                         <TextInput
//                             style={{
//                                 color: COLORS.gray,
//                                 fontSize: 20,
//                             }}
//                             multiline
//                             placeholder="Enter reason..."
//                             placeholderTextColor={COLORS.gray}
//                             value={reason}
//                             onChangeText={(text) => setReason(text)}
//                         />
//                     </View>
//                 </View>

//                 {/* Add Image */}
//                 <View style={{ marginTop: 20, paddingHorizontal: 20, gap: 10 }}>
//                     <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>Add Image</Text>
//                     <TouchableOpacity style={{
//                         width: "20%",
//                         borderWidth: 1,
//                         borderColor: COLORS.gray,
//                         padding: 10,
//                         justifyContent: "center",
//                         alignItems: "center"
//                     }}>
//                         <Text style={{ color: COLORS.gradient, textAlign: "center", fontSize: 16 }}>Add File</Text>
//                     </TouchableOpacity>
//                 </View>

//                 {/* Add padding at the bottom to avoid content being hidden by the fixed button */}
//                 <View style={{ height: 100 }} />
//             </ScrollView>

//             {/* Fixed Request Button */}
//             <View style={{
//                 width: "100%",
//                 height: 80,
//                 backgroundColor: COLORS.white,
//                 position: "absolute",
//                 bottom: 0,
//                 elevation: 10,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 paddingHorizontal: 20
//             }}>
//                 <TouchableOpacity
//                     style={{
//                         backgroundColor: COLORS.green,
//                         borderRadius: 5,
//                         width: "100%",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         padding: 10
//                     }}
//                     onPress={() => setModalVisible(true)}
//                 >
//                     <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "500" }}>Request Leave</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Modal */}
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     backgroundColor: 'rgba(0,0,0,0.5)'
//                 }}>
//                     <View style={{
//                         width: '90%',
//                         backgroundColor: COLORS.white,
//                         borderRadius: 10,
//                         padding: 20,
//                         alignItems: 'center'
//                     }}>
//                         <Text style={{
//                             fontSize: 18,
//                             fontWeight: '600',
//                             color: COLORS.black,
//                             marginBottom: 15
//                         }}>
//                             Insufficient Paid Leave Balance!
//                         </Text>

//                         <View style={{ width: '100%', marginBottom: 15 }}>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                 <Text style={{ fontSize: 14, color: COLORS.black }}>
//                                     Requested Casual Leave:
//                                 </Text>
//                                 <Text style={{ fontSize: 14, color: COLORS.black }}>
//                                     {requestedLeaveDays} {requestedLeaveDays === 0.5 ? 'half day' : 'day'}{requestedLeaveDays > 1 ? 's' : ''}
//                                 </Text>
//                             </View>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
//                                 <Text style={{ fontSize: 14, color: COLORS.black }}>
//                                     Available Leave Balance:
//                                 </Text>
//                                 <Text style={{ fontSize: 14, color: COLORS.black }}>
//                                     {availableLeaveBalance} day{availableLeaveBalance !== 1 ? 's' : ''}
//                                 </Text>
//                             </View>
//                         </View>

//                         <Text style={{
//                             fontSize: 14,
//                             color: availableLeaveBalance >= requestedLeaveDays ? COLORS.green : COLORS.red,
//                             textAlign: 'center',
//                             marginBottom: 15
//                         }}>
//                             {availableLeaveBalance >= requestedLeaveDays
//                                 ? 'Leave balance is sufficient'
//                                 : 'Paid leave balance is not enough. You can request as unpaid leave'}
//                         </Text>

//                         <Text style={{ fontSize: 12, color: COLORS.gray, marginBottom: 5 }}>Note</Text>
//                         <TextInput
//                             style={{
//                                 width: '100%',
//                                 borderWidth: 1,
//                                 borderColor: COLORS.gray,
//                                 borderRadius: 5,
//                                 padding: 10,
//                                 minHeight: 60,
//                                 textAlignVertical: 'top'
//                             }}
//                             multiline
//                             placeholder="Add a note..."
//                             placeholderTextColor={COLORS.gray}
//                         />

//                         <TouchableOpacity
//                             style={{
//                                 backgroundColor: COLORS.green,
//                                 borderRadius: 5,
//                                 padding: 10,
//                                 width: '100%',
//                                 alignItems: 'center',
//                                 marginTop: 20
//                             }}
//                             onPress={() => {
//                                 setModalVisible(false);
//                             }}
//                         >
//                             <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>
//                                 Edit Request
//                             </Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={{ marginTop: 10 }}
//                             onPress={() => setModalVisible(false)}
//                         >
//                             <Text style={{ color: COLORS.gray, fontSize: 14 }}>Close</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </SafeAreaView>
//     );
// };

// export default RequestLeaveScreen;



import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Modal,
    FlatList,
    ScrollView,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { COLORS } from '../Components/Color';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'; // Import permissions library
import { launchImageLibrary } from 'react-native-image-picker'; // Importing the image picker

const RequestLeaveScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false);
    const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [isHalfDay, setIsHalfDay] = useState(false);
    const [requestedLeaveDays, setRequestedLeaveDays] = useState(1);
    const [leaveTypeModal, setLeaveTypeModal] = useState(false);
    const [imageUri, setImageUri] = useState(null);

    const [selectedLeave, setSelectedLeave] = useState("Casual Leave");
    const [availableLeaveBalance, setAvailableLeaveBalance] = useState(5);
    const [reason, setReason] = useState('');
    const leaveTypes = [
        { type: "Casual Leave", balance: 5 },
        { type: "Privilege Leave", balance: 0 },
        { type: "Sick Leave", balance: 0 },
    ];

    // Function to calculate days between dates
    const calculateLeaveDays = (startDate, endDate, halfDay) => {
        if (halfDay) {
            setRequestedLeaveDays(0.5);
        } else {
            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            setRequestedLeaveDays(diffDays);
        }
    };

    // Format date to string
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Handle date confirmations
    const handleFromDateConfirm = (date) => {
        setFromDate(date);
        if (date > toDate) setToDate(date);
        calculateLeaveDays(date, toDate, isHalfDay);
        setFromDatePickerVisibility(false);
    };

    const handleToDateConfirm = (date) => {
        setToDate(date);
        calculateLeaveDays(fromDate, date, isHalfDay);
        setToDatePickerVisibility(false);
    };

    // Handle half-day toggle
    const toggleHalfDay = () => {
        setIsHalfDay(!isHalfDay);
        calculateLeaveDays(fromDate, toDate, !isHalfDay);
        if (!isHalfDay) {
            setToDate(fromDate);
        }
    };

    // Function to request camera and microphone permissions
    const requestMediaPermissions = async () => {
        try {
            // Request camera permission
            const cameraResult = await request(
                Platform.OS === 'ios'
                    ? PERMISSIONS.IOS.CAMERA
                    : PERMISSIONS.ANDROID.CAMERA
            );

            // Request microphone permission
            const microphoneResult = await request(
                Platform.OS === 'ios'
                    ? PERMISSIONS.IOS.MICROPHONE
                    : PERMISSIONS.ANDROID.RECORD_AUDIO
            );

            // Check results
            // console.log(microphoneResult, cameraResult)
            if (cameraResult === RESULTS.GRANTED && microphoneResult === RESULTS.GRANTED) {
                launchImageLibrary(
                    { mediaType: 'photo', quality: 1 }, // options (photo type, high quality)
                    (response) => {
                      if (response.didCancel) {
                        console.log('User cancelled image picker');
                      } else if (response.errorCode) {
                        console.log('ImagePicker Error: ', response.errorMessage);
                      } else {
                        setImageUri(response.assets[0].uri); // Set the selected image URI
                      }
                    }
                  );
            } else {
                Alert.alert(
                    'Permission Denied',
                    'Camera and/or microphone permissions were not granted. Please enable them in settings.'
                );
            }
        } catch (error) {
            console.log('Error requesting permissions:', error);
            Alert.alert('Error', 'Something went wrong while requesting permissions.');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Static Header */}
            <View style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#1E1E1E",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingVertical: 15
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomVectorIcons
                        name={"arrowleft"}
                        color={COLORS.white}
                        size={24}
                        iconSet={"AntDesign"}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    color: COLORS.white,
                    fontWeight: "600"
                }}>
                    Request Leave
                </Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView style={{ flex: 1 }}>
                {/* Date Inputs */}
                <View style={{
                    flexDirection: "row",
                    marginTop: 20,
                    paddingHorizontal: 20,
                    gap: 20,
                    justifyContent: "space-between"
                }}>
                    <View style={{ flex: 1, gap: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>
                            From date *
                        </Text>
                        <TouchableOpacity
                            onPress={() => setFromDatePickerVisibility(true)}
                            style={{
                                width: "100%",
                                borderWidth: 1,
                                borderColor: COLORS.gray,
                                borderRadius: 5,
                                paddingVertical: 2
                            }}>
                            <Text style={{ fontSize: 14, paddingVertical: 5, marginLeft: 5 }}>
                                {formatDate(fromDate)}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, gap: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>
                            To date *
                        </Text>
                        <TouchableOpacity
                            onPress={() => !isHalfDay && setToDatePickerVisibility(true)}
                            style={{
                                width: "100%",
                                borderWidth: 1,
                                borderColor: isHalfDay ? COLORS.gray : COLORS.gray,
                                borderRadius: 5,
                                padding: 2,
                                opacity: isHalfDay ? 0.5 : 1
                            }}>
                            <Text style={{ fontSize: 14, paddingVertical: 5, marginLeft: 5 }}>
                                {formatDate(toDate)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Date Pickers */}
                <DateTimePickerModal
                    isVisible={isFromDatePickerVisible}
                    mode="date"
                    onConfirm={handleFromDateConfirm}
                    onCancel={() => setFromDatePickerVisibility(false)}
                    minimumDate={new Date()}
                />

                <DateTimePickerModal
                    isVisible={isToDatePickerVisible}
                    mode="date"
                    onConfirm={handleToDateConfirm}
                    onCancel={() => setToDatePickerVisibility(false)}
                    minimumDate={fromDate}
                />

                {/* Half day checkbox */}
                <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 10, alignItems: "center", gap: 5 }}>
                    <TouchableOpacity
                        onPress={toggleHalfDay}
                        style={{
                            height: 18,
                            width: 18,
                            borderWidth: 2,
                            borderColor: COLORS.gray,
                            borderRadius: 2,
                            backgroundColor: isHalfDay ? COLORS.green : 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        {isHalfDay && (
                            <CustomVectorIcons
                                name={"check"}
                                color={COLORS.white}
                                size={12}
                                iconSet={"AntDesign"}
                            />
                        )}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, fontWeight: "600" }}>Request leave for half day</Text>
                </View>

                {/* Leave Type */}
                <View style={{ marginTop: 20, paddingHorizontal: 20, gap: 10 }}>
                    <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>Leave Type *</Text>
                    <TouchableOpacity
                        onPress={() => setLeaveTypeModal(true)}
                        style={{
                            width: "100%",
                            borderWidth: 1,
                            borderColor: COLORS.gray,
                            padding: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: 15
                        }}
                    >
                        <Text style={{ fontSize: 16, color: COLORS.black, fontWeight: "500" }}>
                            {selectedLeave} (balance: {availableLeaveBalance} days)
                        </Text>
                        <CustomVectorIcons name={"arrow-drop-down"} size={24} color={COLORS.black} iconSet={"MaterialIcons"} />
                    </TouchableOpacity>

                    {/* Modal for selecting leave type */}
                    <Modal visible={leaveTypeModal} transparent animationType="slide">
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
                            <View style={{ width: "80%", backgroundColor: "white", padding: 10, borderRadius: 2 }}>
                                <FlatList
                                    data={leaveTypes}
                                    keyExtractor={(item) => item.type}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={{
                                                paddingVertical: 10,
                                            }}
                                            onPress={() => {
                                                setSelectedLeave(item.type);
                                                setAvailableLeaveBalance(item.balance);
                                                setLeaveTypeModal(false);
                                            }}
                                        >
                                            <Text style={{ fontSize: 16, color: COLORS.gray, fontWeight: "400" }}>
                                                {item.type} (balance: {item.balance} days)
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                                <TouchableOpacity
                                    onPress={() => setLeaveTypeModal(false)}
                                    style={{
                                        marginTop: 15,
                                        alignSelf: "center",
                                        backgroundColor: COLORS.green,
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        borderRadius: 5
                                    }}
                                >
                                    <Text style={{ color: COLORS.white, fontWeight: "600", fontSize: 16 }}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* Reason */}
                <View style={{ marginTop: 20, paddingHorizontal: 20, gap: 10 }}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: "500",
                        color: COLORS.black
                    }}>
                        Reason of leave
                    </Text>
                    <View style={{
                        width: "100%",
                        borderWidth: 1,
                        borderColor: COLORS.gray,
                        padding: 15,
                        borderRadius: 5,
                    }}>
                        <TextInput
                            style={{
                                color: COLORS.gray,
                                fontSize: 20,
                            }}
                            multiline
                            placeholder="Enter reason..."
                            placeholderTextColor={COLORS.gray}
                            value={reason}
                            onChangeText={(text) => setReason(text)}
                        />
                    </View>
                </View>

                {/* Add Image */}
                <View style={{ marginTop: 20, paddingHorizontal: 20, gap: 10 }}>
                    <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.black }}>Add Image</Text>
                    <TouchableOpacity
                        style={{
                            width: "20%",
                            borderWidth: 1,
                            borderColor: COLORS.gray,
                            padding: 10,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        onPress={requestMediaPermissions} // Call permission request function
                    >
                        <Text style={{ color: COLORS.gradient, textAlign: "center", fontSize: 16 }}>Add File</Text>
                    </TouchableOpacity>
                </View>

                {/* Add padding at the bottom */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Fixed Request Button */}
            <View style={{
                width: "100%",
                height: 80,
                backgroundColor: COLORS.white,
                position: "absolute",
                bottom: 0,
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.green,
                        borderRadius: 5,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10
                    }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "500" }}>Request Leave</Text>
                </TouchableOpacity>
            </View>

            {/* Modal */}
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
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <View style={{
                        width: '90%',
                        backgroundColor: COLORS.white,
                        borderRadius: 10,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: COLORS.black,
                            marginBottom: 15
                        }}>
                            Insufficient Paid Leave Balance!
                        </Text>

                        <View style={{ width: '100%', marginBottom: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 14, color: COLORS.black }}>
                                    Requested Casual Leave:
                                </Text>
                                <Text style={{ fontSize: 14, color: COLORS.black }}>
                                    {requestedLeaveDays} {requestedLeaveDays === 0.5 ? 'half day' : 'day'}{requestedLeaveDays > 1 ? 's' : ''}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={{ fontSize: 14, color: COLORS.black }}>
                                    Available Leave Balance:
                                </Text>
                                <Text style={{ fontSize: 14, color: COLORS.black }}>
                                    {availableLeaveBalance} day{availableLeaveBalance !== 1 ? 's' : ''}
                                </Text>
                            </View>
                        </View>

                        <Text style={{
                            fontSize: 14,
                            color: availableLeaveBalance >= requestedLeaveDays ? COLORS.green : COLORS.red,
                            textAlign: 'center',
                            marginBottom: 15
                        }}>
                            {availableLeaveBalance >= requestedLeaveDays
                                ? 'Leave balance is sufficient'
                                : 'Paid leave balance is not enough. You can request as unpaid leave'}
                        </Text>

                        <Text style={{ fontSize: 12, color: COLORS.gray, marginBottom: 5 }}>Note</Text>
                        <TextInput
                            style={{
                                width: '100%',
                                borderWidth: 1,
                                borderColor: COLORS.gray,
                                borderRadius: 5,
                                padding: 10,
                                minHeight: 60,
                                textAlignVertical: 'top'
                            }}
                            multiline
                            placeholder="Add a note..."
                            placeholderTextColor={COLORS.gray}
                        />

                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.green,
                                borderRadius: 5,
                                padding: 10,
                                width: '100%',
                                alignItems: 'center',
                                marginTop: 20
                            }}
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        >
                            <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>
                                Edit Request
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{ color: COLORS.gray, fontSize: 14 }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default RequestLeaveScreen;