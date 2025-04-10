import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { COLORS } from '../Components/Color';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../Components/Images';

const PersonalDetailsScreen = () => {
  const navigation = useNavigation();

  // State for selected values
  const [selectedGender, setSelectedGender] = useState('eg. Male');
  const [selectedMarital, setSelectedMarital] = useState('eg. Unmarried');
  const [selectedBlood, setSelectedBlood] = useState('eg. O+');

  // Refs for bottom sheets
  const genderSheetRef = useRef(null);
  const maritalSheetRef = useRef(null);
  const bloodSheetRef = useRef(null);

  // Options for selections
  const genderOptions = ['Male', 'Female', 'Other'];
  const maritalOptions = ['Unmarried', 'Married'];
  const bloodOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Function to render selectable items in bottom sheet
  const renderSheetItem = (item, setValue, sheetRef) => (
    <TouchableOpacity
      style={{
        top:20,
        paddingHorizontal:20,
        marginVertical:10,
      }}
      onPress={() => {
        setValue(item);
        sheetRef.current.close();
      }}
    >
      <Text style={{ fontSize: 15, color: COLORS.black }}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
     
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
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomVectorIcons name={'arrowleft'} color={COLORS.black} size={24} iconSet={'AntDesign'} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: COLORS.black, fontWeight: '600' }}>Personal Details</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:50}}>
        <View style={{ padding: 20 }}>
          {/* Staff Name */}
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Staff Name</Text>
            <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
              <Text style={{ fontWeight: '500', fontSize: 14, color: COLORS.black }}>Khalid Pathan</Text>
            </View>
          </View>

          {/* Mobile Number */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Mobile Number</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                
              }}
            >
              <View style={{width:"25%",backgroundColor:COLORS.white,borderTopLeftRadius:7,borderBottomLeftRadius:7,borderRightWidth:0.5,borderRightColor:COLORS.gray}}>
                <View style={{flexDirection:"row",margin:15}}>
                <Image source={IMAGES.Flag} style={{ height: 24, width: 24 }} />
                <Text style={{ color: COLORS.black, marginLeft: 5, fontSize: 14, fontWeight: '500' }}>+91</Text>
                  <CustomVectorIcons name="arrow-drop-down" size={24} color={COLORS.black} iconSet="MaterialIcons" />
                </View>
              </View>
              
              <View style={{alignItems:"center",justifyContent:"center",left:20}}>
                <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.black }}>7743562345</Text>
              </View>
            </View>
          </View>

          {/* Personal Email ID */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Personal Email ID</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>Personal123@Gmail.com</Text>
            </View>
          </View>

          {/* Date Of Birth */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Date Of Birth</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>hello</Text>
            </View>
          </View>

          {/* Gender */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Gender</Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => genderSheetRef.current.open()}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>{selectedGender}</Text>
              <CustomVectorIcons name={'keyboard-arrow-down'} color={COLORS.gray} iconSet={'MaterialIcons'} size={24} />
            </TouchableOpacity>
          </View>

          {/* Marital Status */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Marital Status</Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => maritalSheetRef.current.open()}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>{selectedMarital}</Text>
              <CustomVectorIcons name={'keyboard-arrow-down'} color={COLORS.gray} iconSet={'MaterialIcons'} size={24} />
            </TouchableOpacity>
          </View>

          {/* Blood Group */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Blood Group</Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => bloodSheetRef.current.open()}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>{selectedBlood}</Text>
              <CustomVectorIcons name={'keyboard-arrow-down'} color={COLORS.gray} iconSet={'MaterialIcons'} size={24} />
            </TouchableOpacity>
          </View>

          {/* Guardian Name */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Guardian Name</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>eg. Name</Text>
            </View>
          </View>

          {/* Emergency Contact Name */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Emergency Contact Name</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>Contact Name</Text>
            </View>
          </View>

          {/* Emergency Contact Relationship */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Emergency Contact Relationship</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>eg. father</Text>
            </View>
          </View>

          {/* Emergency Contact Mobile */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Emergancing Mobile Contact</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,

              }}
            >
              <View style={{ width: "25%", backgroundColor: COLORS.white, borderTopLeftRadius: 7, borderBottomLeftRadius: 7, borderRightWidth: 0.5, borderRightColor: COLORS.gray }}>
                <View style={{ flexDirection: "row", margin: 15 }}>
                  <Image source={IMAGES.Flag} style={{ height: 24, width: 24 }} />
                  <Text style={{ color: COLORS.black, marginLeft: 5, fontSize: 14, fontWeight: '500' }}>+91</Text>
                  <CustomVectorIcons name="arrow-drop-down" size={24} color={COLORS.black} iconSet="MaterialIcons" />
                </View>
              </View>

              <View style={{ alignItems: "center", justifyContent: "center", left: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.gray }}>7743562345</Text>
              </View>
            </View>
          </View>

          {/* Emergency Contact Address */}
          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.gray }}>Emergency Contact Address</Text>
            <View
              style={{
                backgroundColor: COLORS.bgCard,
                width: '100%',
                borderRadius: 7,
                flexDirection: 'row',
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray }}>Sambhar Lake, Jaipur</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Gender Bottom Sheet */}
      <RBSheet
        ref={genderSheetRef}
        height={250}
        openDuration={250}
        customStyles={{ container: { borderTopLeftRadius: 20, borderTopRightRadius: 20 } }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            paddingHorizontal:20,
            marginTop:25
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600', color: COLORS.black}}>Select Gender</Text>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
          {genderOptions.map((item, index) => (
            <View key={index}>
              {renderSheetItem(item, setSelectedGender, genderSheetRef)}
            </View>
          ))}
        </ScrollView>
      </RBSheet>

      {/* Marital Status Bottom Sheet */}
      <RBSheet
        ref={maritalSheetRef}
        height={200}
        openDuration={250}
        customStyles={{ container: { borderTopLeftRadius: 20, borderTopRightRadius: 20 } }}
      >
        <View
          style={{
            marginTop:20,
            paddingHorizontal:20,
            backgroundColor: COLORS.white,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600', color: COLORS.black }}>Select Marital Status</Text>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
          {maritalOptions.map((item, index) => (
            <View key={index}>
              {renderSheetItem(item, setSelectedMarital, maritalSheetRef)}
            </View>
          ))}
        </ScrollView>
      </RBSheet>

      {/* Blood Group Bottom Sheet */}
      <RBSheet
        ref={bloodSheetRef}
        height={400}
        openDuration={250}
        customStyles={{ container: { borderTopLeftRadius: 20, borderTopRightRadius: 20 } }}
      >
        <View
          style={{
            marginTop:20,
            paddingHorizontal:20,
            backgroundColor: COLORS.white,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600', color: COLORS.black }}>Select Blood Group</Text>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
          {bloodOptions.map((item, index) => (
            <View key={index}>
              {renderSheetItem(item, setSelectedBlood, bloodSheetRef)}
            </View>
          ))}
        </ScrollView>
      </RBSheet>
      <View style={{position:"absolute",bottom:0,width:"100%",height:60,elevation:5,backgroundColor:COLORS.white,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.green,
                                borderRadius: 5,
                                width: "90%",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 10,
                                alignSelf:"center"
                            }}
                        >
                            <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "500" }}>Save Details</Text>
                        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PersonalDetailsScreen;