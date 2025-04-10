import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../Components/Color'
import { useNavigation } from '@react-navigation/native';
import CustomVectorIcons from '../Components/CustomVectorIcons';

const CurrentEmlpoymentScreen = () => {
    const navigation = useNavigation();
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
                <Text style={{ fontSize: 16, color: COLORS.black, fontWeight: '600' }}>Current Employment</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:50}}>
         <View style={{padding:20}}>
                    <View style={{ gap: 10}}>
                        <Text style={{ fontSize: 14, color: COLORS.gray }}>Branch</Text>
                        <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                            <Text style={{ fontWeight: '500', fontSize: 14, color: COLORS.black }}>SS HERBAL Main Branch</Text>
                        </View>
                    </View>
                    <View style={{ gap: 10,marginTop:20 }}>
                        <Text style={{ fontSize: 14, color: COLORS.gray }}>Departments</Text>
                        <TouchableOpacity style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 25, borderRadius: 5 }}>
                           
                        </TouchableOpacity>
                    </View>
                <View style={{ gap: 10,marginTop:20 }}>
                    <Text style={{ fontSize: 14, color: COLORS.gray }}>Employee Type</Text>
                    <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                        <Text style={{ fontWeight: '400', fontSize: 14, color: COLORS.gray }}>Full Time</Text>
                    </View>
                </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 14, color: COLORS.gray ,marginTop:20}}>Job Title</Text>
                        <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: COLORS.gray }}>Staff Title</Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 14, color: COLORS.gray, marginTop: 20 }}>Date Of Joining</Text>
                        <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: COLORS.gray }}>joining</Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 14, color: COLORS.gray, marginTop: 20 }}>Employee Id</Text>
                        <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                            <Text style={{ fontWeight: '500', fontSize: 14, color: COLORS.black }}>SSSSJJJHH</Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 14, color: COLORS.gray, marginTop: 20 }}>Official Email ID</Text>
                        <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: COLORS.gray }}>Example@Gmail.com</Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 14, color: COLORS.gray, marginTop: 20 }}>PF A/C No.</Text>
                        <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: COLORS.gray }}>Enter the PF A/C No.</Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 14, color: COLORS.gray, marginTop: 20 }}>ESI A/C No.</Text>
                        <View style={{ backgroundColor: COLORS.bgCard, width: '100%', padding: 15, borderRadius: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: COLORS.gray }}>Enter the ESI A/C No.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
    )
}

export default CurrentEmlpoymentScreen