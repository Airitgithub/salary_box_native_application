import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView,Switch } from 'react-native';
import React, { useRef, useState } from 'react';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

const ProfileScreen = ({ navigation }) => {
  // Bottom sheet ref
  const bottomSheetRef = useRef(null);
  const attendanceReminderRef = useRef(null);
  const [isPunchInEnabled, setIsPunchInEnabled] = useState(false);
  const [isPunchOutEnabled, setIsPunchOutEnabled] = useState(false);
  // Open bottom sheet
  const handleOpenBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  // Close bottom sheet
  const handleCloseBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", backgroundColor: COLORS.white, padding: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image
              source={IMAGES.Profile}
              style={{ height: 35, width: 35, borderRadius: 25, tintColor: COLORS.gray }}
            />
            <Text style={{ fontSize: 17, fontWeight: "600", color: COLORS.black }}>SS HERBAL</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("NotificationScreen")}
            >
              <CustomVectorIcons
                name={"notifications-none"}
                size={24}
                color={COLORS.gray}
                iconSet={"MaterialIcons"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("MoreSettingsScreen")}
              style={{ padding: 10 }}
            >
              <CustomVectorIcons
                name={"dots-three-vertical"}
                size={20}
                color={COLORS.gray}
                iconSet={"Entypo"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreenDetail")}
            style={{
              height: 85,
              width: 85,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: COLORS.gray,
              backgroundColor: "#FAFAFA",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 20, alignItems: "center", fontWeight: "600", color: COLORS.gray, paddingHorizontal: 7 }}>Add</Text>
            <Text style={{ fontSize: 20, alignItems: "center", fontWeight: "600", color: COLORS.gray, paddingHorizontal: 7, marginTop: -4, left: 2 }}>Image </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 18, fontWeight: "600", color: COLORS.gray }}>
          Khalid Pathan
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileScreenDetail")}
          style={{
            height: 20,
            width: 20,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: COLORS.black,
            backgroundColor: COLORS.gray,
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            right: 170,
            top: 125
          }}
        >
          <CustomVectorIcons
            name={"plus"}
            size={22}
            color={COLORS.white}
            iconSet={"Entypo"}
            style={{ marginTop: -2, left: -2 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        <View style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 7,
          width: "100%",
          justifyContent: "center"
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreenDetail")}
            style={{
              height: 130,
              width: 120,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bgCard,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CustomVectorIcons
              size={40}
              color={COLORS.IconColor}
              name={"person-circle-outline"}
              iconSet={"Ionicons"}
              style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 25, padding: 5 }}
            />
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "400", textAlign: "center", color: COLORS.gray }}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewAttendanceScreen")}
            style={{
              height: 130,
              width: 120,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bgCard,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CustomVectorIcons
              size={30}
              color={COLORS.IconColor}
              name={"calendar"}
              iconSet={"FontAwesome"}
              style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 25, padding: 10 }}
            />
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "400", textAlign: "center", color: COLORS.gray }}>
              View Attendance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOpenBottomSheet}
            style={{
              height: 130,
              width: 120,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bgCard,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CustomVectorIcons
              size={40}
              color={COLORS.IconColor}
              name={"alarm-outline"}
              iconSet={"Ionicons"}
              style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 25, padding: 5 }}
            />
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "400", textAlign: "center", color: COLORS.gray }}>
              Set alarm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RequestLeaveScreen")}
            style={{
              height: 130,
              width: 120,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bgCard,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CustomVectorIcons
              size={40}
              color={COLORS.IconColor}
              name={"beach"}
              iconSet={"MaterialCommunityIcons"}
              style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 25, padding: 5 }}
            />
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "400", textAlign: "center", color: COLORS.gray }}>
              Request leave
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => attendanceReminderRef.current.open()} // Open attendance reminder bottom sheet
            style={{
              height: 130,
              width: 120,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bgCard,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CustomVectorIcons
              size={35}
              color={COLORS.IconColor}
              name={"notifications-outline"}
              iconSet={"Ionicons"}
              style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 25, padding: 5 }}
            />
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "400", textAlign: "center", color: COLORS.gray }}>
              Attendance Reminder
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("NoteScreen")}
            style={{
              height: 130,
              width: 120,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bgCard,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CustomVectorIcons
              size={30}
              color={COLORS.IconColor}
              name={"clipboard-notes"}
              iconSet={"Foundation"}
              style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 30, padding: 10 }}
            />
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "400", textAlign: "center", color: COLORS.gray }}>
            Notes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HolidayListScreen")}
            style={{
              height: 130,
              width: 120,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bgCard,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CustomVectorIcons
              size={30}
              color={COLORS.IconColor}
              name={"list-sharp"}
              iconSet={"Ionicons"}
              style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 30, padding: 10 }}
            />
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "400", textAlign: "center", color: COLORS.gray }}>
              Holiday List
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Sheet using react-native-raw-bottom-sheet */}
      <RBSheet
        ref={bottomSheetRef}
        height={250} // Fixed height in pixels
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: COLORS.gray,
          },
        }}
      >
        <View style={{ padding: 20 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.black }}>
              Alarms
            </Text>
            
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Text style={{ fontSize: 16, color: '#888' }}>Close</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15, fontWeight: '600', color: COLORS.gray ,marginBottom:25,marginTop:5}}>
            you can set multiple alarms
          </Text>

          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: COLORS.backGroundIcon,
              borderRadius: 10,
              marginBottom: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CustomVectorIcons
              name={'log-in-outline'}
              size={20}
              color={COLORS.IconColor}
              iconSet={'Ionicons'}
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 16, color: COLORS.gray }}>
              Punch In Alarm
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: COLORS.backGroundIcon,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CustomVectorIcons
              name={'log-out-outline'}
              size={20}
              color={COLORS.IconColor}
              iconSet={'Ionicons'}
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 16, color: COLORS.gray }}>
              Punch Out Alarm
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>

      {/* Bottom Sheet for attendance remainder */}
      <RBSheet
        ref={attendanceReminderRef}
        height={250}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          },
          draggableIcon: {
            backgroundColor: '#ccc',
          },
        }}
      >
        {/* Header Section */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15
        }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#000' }}>
            Attendance Reminder
          </Text>
          <TouchableOpacity onPress={() => attendanceReminderRef.current.close()}>
            <Text style={{ fontSize: 16, color: '#888' }}>Close</Text>
          </TouchableOpacity>
        </View>

        {/* Toggle for Punch In */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10
        }}>
          <Text style={{ fontSize: 16, color: '#333' }}>
            Punch In Reminder
          </Text>
          <Switch
            value={isPunchInEnabled}
            onValueChange={(value) => setIsPunchInEnabled(value)}
            thumbColor={isPunchInEnabled ? "#4CAF50" : "#ccc"}
            trackColor={{ false: "#ddd", true: "#A5D6A7" }}
          />
        </View>

        {/* Toggle for Punch Out */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10
        }}>
          <Text style={{ fontSize: 16, color: '#333' }}>
            Punch Out Reminder
          </Text>
          <Switch
            value={isPunchOutEnabled}
            onValueChange={(value) => setIsPunchOutEnabled(value)}
            thumbColor={isPunchOutEnabled ? "#F44336" : "#ccc"}
            trackColor={{ false: "#ddd", true: "#EF9A9A" }}
          />
         
        </View>
        <Text style={{ color:"#888",textAlign:"center",marginTop:40}}>you will be notified  via notification</Text>
      </RBSheet>


    </SafeAreaView>
  );

};

export default ProfileScreen;