import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { Camera, useCameraDevice, useCameraDevices } from 'react-native-vision-camera';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const MarkAttendance = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const devices = useCameraDevices();
  const device = useCameraDevice('front');

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraStatus = await Camera.requestCameraPermission();
      const cameraResult = await request(
        Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
      );
      const microphoneResult = await request(
        Platform.OS === 'ios' ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO
      );
      setHasPermission(cameraStatus === 'granted' && cameraResult === 'granted' && microphoneResult === 'granted');
    };
    requestPermissions();
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current && hasPermission) {
      try {
        const photo = await cameraRef.current.takePhoto();
        setCapturedImage(photo.path);
        Alert.alert("Attendance Marked", "Your attendance has been successfully recorded.");
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to capture photo.");
      }
    } else {
      Alert.alert("Permission Denied", "Camera permission is required to capture attendance.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={IMAGES.Profile} style={{ height: 30, width: 30, borderRadius: 15 }} />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>SS HERBAL</Text>
        </View>
        <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("NotificationScreen")}>
          <CustomVectorIcons name={"notifications-none"} size={24} color={COLORS.black} iconSet={"MaterialIcons"} />
        </TouchableOpacity>
      </View>

      {/* Date & Status */}
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ textAlign: "center", color: COLORS.black, fontWeight: "600" }}>08 March </Text>
        <Text style={{ textAlign: "center", color: COLORS.red, fontWeight: "600" }}> Absent</Text>
      </View>
      <View style={{ borderBottomWidth: 2, borderBottomColor: COLORS.red, width: "100%" }}></View>

      {/* Camera View */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {device && hasPermission ? (
          <Camera
            ref={cameraRef}
            style={{ width: 300, height: 400, borderRadius: 20 }}
            device={device}
            isActive={true}
            photo={true}
          />
        ) : (
          <Text style={{ fontSize: 16, fontWeight: "400", textAlign: "center" }}>
            Camera permission not granted or device not available
          </Text>
        )}

        {/* Capture Attendance Button */}
        <TouchableOpacity
          onPress={handleCapture}
          style={{
            backgroundColor: COLORS.green,
            padding: 10,
            paddingHorizontal:30,
            marginTop: 20,
            borderRadius: 10,
            alignItems: 'center'
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: 18 }}>Punch In</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleCapture}
          style={{
            backgroundColor: COLORS.red,
            padding: 10,
            paddingHorizontal: 30,
            marginTop: 20,
            borderRadius: 10,
            alignItems: 'center'
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: 18 }}>Punch Out</Text>
        </TouchableOpacity> */}

        {/* Captured Image Preview */}
        {capturedImage && (
          <Image source={{ uri: `file://${capturedImage}` }} style={{ width: 100, height: 100, margin: 10 }} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MarkAttendance;