import React, { useEffect, useRef } from 'react';
import { useWindowDimensions, Dimensions, View, Text, ActivityIndicator, StyleSheet, Image, StatusBar, Animated } from 'react-native';

import LoaderKit from 'react-native-loader-kit'
import fontFamily from './fontfamily';
import { COLORS } from './Color';

const Loader = ({ visible = false }) => {
    const { width, height } = useWindowDimensions();
    const height2 = height
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animatedValue]);

    const scaleInterpolation = animatedValue.interpolate({
        inputRange: [0.5, 4],
        outputRange: [1, 2.9], // Change scaling effect here
    });
    return (
        visible && (
            <View style={[style.container, { height2, width }]}>
                <View style={{ marginTop: 20 }}>

                    
                    <LoaderKit style={{ width: 50, height: 50, alignSelf: 'center' }} name={'BallSpinFadeLoader'} color={`white`} />
                    <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center', marginTop: 5, fontFamily:fontFamily.MontserratBlack }}> Processing...</Text>
                </View>
            </View >
        )
    );
};

const style = StyleSheet.create({

    loader: {
        height: 100, backgroundColor: 'transparent', marginHorizontal: 50, borderRadius: 5, flexDirection: 'column', alignItems: 'center', paddingHorizontal: 0,
    },
    container: {
        top: 0, bottom: 0, position: 'absolute', zIndex: 1050,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
    },
    loaderStyle: { width: 50, height: 50, alignItems: 'center', alignSelf: 'center' },
    square: {
        width: 12,
        height: 12,
        margin: 2,
        backgroundColor:COLORS.golden , // Dark color for the squares
    },
});

export default Loader;



