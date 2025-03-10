import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../Components/Color';
import RequestComponent from '../Components/RequestComponent';
import HistoryComponent from '../Components/HistoryComponent';

const LeavesScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("REQUEST");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header Section */}
      <View style={{
        width: "100%",
        padding: 10,
        backgroundColor: "#1E1E1E",
        borderBottomWidth: 2,
        borderBottomColor: COLORS.white
      }}>
        <Text style={{
          marginHorizontal: 20,
          color: COLORS.white,
          fontSize: 16,
          fontWeight: "500"
        }}>
          Leave Requests
        </Text>

        {/* Tabs */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20
        }}>
          <TouchableOpacity onPress={() => setActiveTab("REQUEST")}>
            <Text style={{
              color: activeTab === "REQUEST" ? COLORS.white : COLORS.green,
              fontSize: 16,
              fontWeight: "600",
              borderBottomWidth: activeTab === "REQUEST" ? 2 : 0,
              borderBottomColor: COLORS.white,
              paddingBottom: 5
            }}>
              REQUEST
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("HISTORY")}>
            <Text style={{
              color: activeTab === "HISTORY" ? COLORS.white : COLORS.green,
              fontSize: 16,
              fontWeight: "600",
              borderBottomWidth: activeTab === "HISTORY" ? 2 : 0,
              borderBottomColor: COLORS.white,
              paddingBottom: 5
            }}>
              HISTORY
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Render Components Based on Active Tab */}
      <View style={{ flex: 1 ,paddingVertical:10}}>
        {activeTab === "REQUEST" ? <RequestComponent /> : <HistoryComponent />}
      </View>

    </SafeAreaView>
  );
};

export default LeavesScreen;