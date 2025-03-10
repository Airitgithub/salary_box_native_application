import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../Components/Color'
import { IMAGES } from '../Components/Images'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
       setTimeout(() => {
           navigation.navigate("AuthenticScreen")
       }, 3000);
    })
  return (
    <SafeAreaView style={{backgroundColor:COLORS.white,justifyContent:"center",alignItems:'center',flex:1}}>
        <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"}/>
     <Image source={IMAGES.Splash} style={{height:100,width:100,borderRadius:10}}></Image>
          <Text style={{ fontSize: 30, fontWeight: '700', color:COLORS.purple,marginVertical:10}}>SalaryBox</Text>
      </SafeAreaView>
  )
}

export default SplashScreen