import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { List } from 'react-native-paper';
import { COLORS } from '../Components/Color';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreenDetail = () => {
  const [profileImage, setProfileImage] = useState(null);
  const navigation = useNavigation();

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', padding: 10, backgroundColor: COLORS.white, flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomVectorIcons name={'arrowleft'} color={COLORS.black} size={24} iconSet={'AntDesign'} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: COLORS.black, fontWeight: '600' }}>Khalid Pathan</Text>
      </View>

      <View style={{ padding: 10 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, gap: 10 }}>
          <TouchableOpacity
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              backgroundColor: COLORS.orange,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}
            onPress={openGallery}
          >
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={{ height: '100%', width: '100%' }} />
            ) : (
              <Text style={{ fontSize: 70, color: COLORS.white, fontWeight: '600' }}>K</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              position: 'absolute',
              backgroundColor: COLORS.white,
              borderColor: COLORS.gray,
              borderWidth: 0.2,
              right: 150,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={openGallery}
          >
            <CustomVectorIcons name={'photo-camera-back'} color={COLORS.gray} iconSet={'MaterialIcons'} size={24} />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, color: COLORS.black, fontWeight: '600' }}>Khalid Pathan</Text>
          <Text style={{ fontSize: 17, color: COLORS.black, fontWeight: '400' }}>91-5566775544</Text>
        </View>
      </View>

      <List.Section style={{ backgroundColor: COLORS.white, marginHorizontal: 20, borderRadius: 10 }}>
        <List.Item
          style={{ padding: 10, borderBottomWidth: 0.5, borderBottomColor: COLORS.gray }}
          onPress={() => navigation.navigate("PersonalDetailsScreen")}
          title="Personal Details"
          left={() => <CustomVectorIcons name={'person'} color={COLORS.black} iconSet={'FontAwesome6'} size={24} />}
          right={() => <CustomVectorIcons name={'keyboard-arrow-right'} color={COLORS.black} iconSet={'MaterialIcons'} size={24} />}
        />
        <List.Item
          onPress={() => navigation.navigate("CurrentEmlpoymentScreen")}
          style={{ padding: 10, borderBottomWidth: 0.5, borderBottomColor: COLORS.gray }}
          title="Current Employment"
          left={() => <CustomVectorIcons name={'bag-outline'} color={COLORS.black} iconSet={'Ionicons'} size={22} />}
          right={() => <CustomVectorIcons name={'keyboard-arrow-right'} color={COLORS.black} iconSet={'MaterialIcons'} size={24} />}
        />
        <List.Item
          onPress={() => navigation.navigate("AttandanceDetailsScreen")}
          style={{ padding: 10, borderBottomWidth: 0.5, borderBottomColor: COLORS.gray }}
          title="Attendance Details"
          left={() => <CustomVectorIcons name={'fingerprint'} color={COLORS.black} iconSet={'Entypo'} size={22} />}
          right={() => <CustomVectorIcons name={'keyboard-arrow-right'} color={COLORS.black} iconSet={'MaterialIcons'} size={24} />}
        />
        <List.Item
          onPress={() => navigation.navigate("BankDetailsScreen")}
          style={{ padding: 10, borderBottomWidth: 0.5, borderBottomColor: COLORS.gray }}
          title="Bank Details"
          left={() => <CustomVectorIcons name={'bank-outline'} color={COLORS.black} iconSet={'MaterialCommunityIcons'} size={22} />}
          right={() => <CustomVectorIcons name={'keyboard-arrow-right'} color={COLORS.black} iconSet={'MaterialIcons'} size={24} />}
        />
        <List.Item
          style={{ padding: 10 }}
          title="User Permission"
          left={() => <CustomVectorIcons name={'user-o'} color={COLORS.black} iconSet={'FontAwesome'} size={22} />}
          right={() => <CustomVectorIcons name={'keyboard-arrow-right'} color={COLORS.black} iconSet={'MaterialIcons'} size={24} />}
        />
      </List.Section>
    </View>
  );
};

export default ProfileScreenDetail;
