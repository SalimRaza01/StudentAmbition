import React, { useEffect, useRef } from 'react';
import { Text, View,  TouchableOpacity, StyleSheet, Animated } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

export default function CompleteReg(props) {
  const bounceAnim = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.spring(bounceAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50, 
      bounciness: 20,
    }).start();

  })

  const logoStyle = {
    transform: [{ scale: bounceAnim }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.para1}> All Set </Text>
      <Animated.Image
        style={[styles.logo, logoStyle]}
        source={require('../assets/tick.png')}
      />

<TouchableOpacity
        style={styles.mybtn}
        onPress={() => props.navigation.navigate('SelectPrefer')}>
           <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
        <Text style={styles.btntext}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 25,
    justifyContent: "center",
  },
  mybtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(10),
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    marginTop: responsiveHeight(30),
    alignSelf: 'center',
  },
  para1: {

    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: '#5A61C9',
    textAlign:'center',
    
    marginTop: responsiveHeight(55)

  },
});
