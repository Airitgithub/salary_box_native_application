import { View, Text, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../Components/Color'; // Ensure this file exists
import CustomVectorIcons from '../Components/CustomVectorIcons'; // Ensure this component exists
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';

const MoreSettingsScreen = () => {
  const navigation = useNavigation();
  const [featureModalVisible, setFeatureModalVisible] = useState(false); // Modal for "Request a Feature"
  const [logoutModalVisible, setLogoutModalVisible] = useState(false); // Modal for "Logout"

  // Handle logout action
  const handleLogout = () => {
    setLogoutModalVisible(false);
    console.log('User logged out'); // Replace with actual logout logic
    // Example: navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <View
        style={{
          width: '100%',
          padding: 10,
          backgroundColor: COLORS.bgCard,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomVectorIcons name={'arrowleft'} color={COLORS.black} size={24} iconSet={'AntDesign'} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, color: COLORS.black, fontWeight: '600' }}>More Settings</Text>
      </View>

      {/* Settings List */}
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Others</Text>
        <List.Section style={{ backgroundColor: COLORS.white, borderRadius: 10, marginTop: 20 }}>
          <List.Item
            title="Request a Feature"
            left={() => (
              <CustomVectorIcons
                name={'lightbulb-on-outline'}
                color={COLORS.black}
                iconSet={'MaterialCommunityIcons'}
                size={24}
              />
            )}
            right={() => (
              <CustomVectorIcons
                name={'keyboard-arrow-right'}
                color={COLORS.black}
                iconSet={'MaterialIcons'}
                size={24}
              />
            )}
            onPress={() => setFeatureModalVisible(true)} // Open feature modal
          />
          <List.Item
            title="Select Company"
            left={() => (
              <CustomVectorIcons name={'list'} color={COLORS.black} iconSet={'Feather'} size={22} />
            )}
            right={() => (
              <CustomVectorIcons
                name={'keyboard-arrow-right'}
                color={COLORS.black}
                iconSet={'MaterialIcons'}
                size={24}
              />
            )}
          />
          <List.Item
            title="Terms and Conditions"
            left={() => (
              <CustomVectorIcons
                name={'document-text-outline'}
                color={COLORS.black}
                iconSet={'Ionicons'}
                size={22}
              />
            )}
            right={() => (
              <CustomVectorIcons
                name={'keyboard-arrow-right'}
                color={COLORS.black}
                iconSet={'MaterialIcons'}
                size={24}
              />
            )}
          />
          <List.Item
            title="Privacy Policy"
            left={() => (
              <CustomVectorIcons
                name={'document-text-outline'}
                color={COLORS.black}
                iconSet={'Ionicons'}
                size={22}
              />
            )}
            right={() => (
              <CustomVectorIcons
                name={'keyboard-arrow-right'}
                color={COLORS.black}
                iconSet={'MaterialIcons'}
                size={24}
              />
            )}
          />
          <List.Item
            title="Logout"
            left={() => (
              <CustomVectorIcons
                name={'logout-variant'}
                color={COLORS.black}
                iconSet={'MaterialCommunityIcons'}
                size={22}
              />
            )}
            right={() => (
              <CustomVectorIcons
                name={'keyboard-arrow-right'}
                color={COLORS.black}
                iconSet={'MaterialIcons'}
                size={24}
              />
            )}
            onPress={() => setLogoutModalVisible(true)} // Open logout modal
          />
        </List.Section>
      </View>

      {/* Modal for Request a Feature */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={featureModalVisible}
        onRequestClose={() => setFeatureModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              width: '80%',
              backgroundColor: COLORS.white,
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              elevation: 5,
            }}
          >
            <CustomVectorIcons
              name={'lightbulb-on-outline'}
              color={COLORS.green}
              iconSet={'MaterialCommunityIcons'}
              size={40}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: COLORS.black,
                marginTop: 10,
              }}
            >
              Request a Feature
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: COLORS.gray,
                marginTop: 5,
                textAlign: 'center',
              }}
            >
              Tell us what features you'd like to see!
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.green,
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginTop: 20,
                width: '100%',
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('Feature request submitted');
                setFeatureModalVisible(false);
              }}
            >
              <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>
                Request a Feature
              </Text>
            </TouchableOpacity>
            <Text
              onPress={() => setFeatureModalVisible(false)}
              style={{ color: COLORS.black, fontSize: 16, fontWeight: '500', marginTop: 15 }}
            >
              Cancel
            </Text>
          </View>
        </View>
      </Modal>

      {/* Modal for Logout */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              width: '80%',
              backgroundColor: COLORS.white,
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              elevation: 5,
            }}
          >
            {/* Icon */}
            <CustomVectorIcons
              name={'logout-variant'}
              color={COLORS.red}
              iconSet={'MaterialCommunityIcons'}
              size={40}
            />

            {/* Title */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: COLORS.black,
                marginTop: 10,
              }}
            >
              Confirm Logout
            </Text>

            {/* Subtitle */}
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: COLORS.gray,
                marginTop: 5,
                textAlign: 'center',
              }}
            >
              Are you sure you want to logout?
            </Text>

            {/* Buttons */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.gray,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  width: '45%',
                  alignItems: 'center',
                }}
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.red,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  width: '45%',
                  alignItems: 'center',
                }}
                onPress={handleLogout}
              >
                <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MoreSettingsScreen;