import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../Components/Color'
import { IMAGES } from '../Components/Images'
import CustomVectorIcons from '../Components/CustomVectorIcons'

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", backgroundColor: COLORS.white, padding: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={IMAGES.Profile} style={{ height: 40, width: 40, borderRadius: 25,tintColor:COLORS.gray }}></Image>
            <Text style={{ fontSize: 18, fontWeight: "600",color:COLORS.gray }}>SS HERBAL</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("NotificationScreen")}>
              <CustomVectorIcons name={"notifications-none"} size={24} color={COLORS.gray} iconSet={"MaterialIcons"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <CustomVectorIcons name={"dots-three-vertical"} size={20} color={COLORS.gray} iconSet={"Entypo"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreenDetail")} style={{ height: 85, width: 85, borderRadius: 50, borderWidth: 1, borderColor: COLORS.gray, backgroundColor: "#FAFAFA",justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontSize: 20, alignItems: "center", fontWeight: "600", color: COLORS.gray,paddingHorizontal:7 }}>Add</Text>
            <Text style={{ fontSize: 20, alignItems: "center", fontWeight: "600", color: COLORS.gray, paddingHorizontal: 7,marginTop:-5,left:2 }}>Image </Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign:"center",marginTop:10,fontSize:18,fontWeight:"600",color:COLORS.gray}}>Khalid Pathan</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreenDetail")} style={{height:22,width:22,borderRadius:15,borderWidth:1,borderColor:COLORS.black,backgroundColor:COLORS.gray,justifyContent:'center',alignItems:'center',position:"absolute",right:170,top:120}}>
          <CustomVectorIcons name={"plus"} size={24} color={COLORS.white} iconSet={"Entypo"} style={{marginTop:-3,left:-2}}/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex:1,marginTop:10,}}>
        <View style={{ flexDirection: "row", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 7, width: "100%" ,justifyContent:"center"}}>
        <TouchableOpacity style={{height:130,width:120,borderRadius:5,borderWidth:1,borderColor:COLORS.bgCard,backgroundColor:COLORS.white,justifyContent:"center",alignItems:"center"}}>
            <CustomVectorIcons size={40} color={COLORS.IconColor} name={"person-circle-outline"} iconSet={"Ionicons"} style={{ backgroundColor:COLORS.backGroundIcon,borderRadius:25,padding:5}}/>
            <Text style={{fontSize:16,marginTop:10,fontWeight:"600"}}>Profile</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ViewAttendanceScreen")} style={{ height: 130, width: 120, borderRadius: 5, borderWidth: 1, borderColor: COLORS.bgCard, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>
            <CustomVectorIcons size={30} color={COLORS.IconColor} name={"calendar"} iconSet={"FontAwesome"} style={{ backgroundColor: COLORS.backGroundIcon, borderRadius: 25, padding: 10 }} />
            <Text style={{ fontSize: 16, marginTop: 10, fontWeight: "600" ,textAlign:"center"}}>View Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 130, width: 120, borderRadius: 5, borderWidth: 1, borderColor: COLORS.bgCard, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>
            <CustomVectorIcons size={40} color={COLORS.gray} name={"alarm-outline"} iconSet={"Ionicons"} style={{ backgroundColor: COLORS.bgCard, borderRadius: 25, padding: 5 }} />
            <Text style={{ fontSize: 16, marginTop: 10, fontWeight: "600" }}>Set alarm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RequestLeaveScreen")} style={{ height: 130, width: 120, borderRadius: 5, borderWidth: 1, borderColor: COLORS.bgCard, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>
            <CustomVectorIcons size={40} color={COLORS.gray} name={"beach"} iconSet={"MaterialCommunityIcons"} style={{ backgroundColor: COLORS.bgCard, borderRadius: 25, padding: 5 }} />
            <Text style={{ fontSize: 16, marginTop: 10, fontWeight: "600" }}>Request leave</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 130, width: 120, borderRadius: 5, borderWidth: 1, borderColor: COLORS.bgCard, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>
            <CustomVectorIcons size={40} color={COLORS.gray} name={"notifications-outline"} iconSet={"Ionicons"} style={{ backgroundColor: COLORS.bgCard, borderRadius: 25, padding: 5 }} />
            <Text style={{ fontSize: 16, marginTop: 10, fontWeight: "600" ,textAlign:"center"}}>Attendance Remainder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 130, width: 120, borderRadius: 5, borderWidth: 1, borderColor: COLORS.bgCard, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>
            <CustomVectorIcons size={35} color={COLORS.gray} name={"calendar"} iconSet={"Octicons"} style={{ backgroundColor: COLORS.bgCard, borderRadius: 30, padding: 10 }} />
            <Text style={{ fontSize: 16, marginTop: 10, fontWeight: "600" }}>Request leave</Text>
          </TouchableOpacity>     
       </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen