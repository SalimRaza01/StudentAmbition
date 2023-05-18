import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import SelectCourse from './SelectCourse';
import SelectYear from './SelectYear';
import { SearchBar } from 'react-native-screens';
import SelectBranch from './SelectBranch';
import SelectOption from './SelectOption';

// import auth from '@react-native-firebase/auth';

export default function SelectPre(props) {

  return (

    <View>
      <Text style={styles.para1}>
        Select Preference
      </Text>
      <SelectCourse></SelectCourse>
      <SelectYear></SelectYear>
      <SelectBranch></SelectBranch>
      <SelectOption></SelectOption>

      <TouchableOpacity style={styles.mybtn}
        onPress={() => props.navigation.navigate('SplashScreen')}
      >
        <Text style={styles.btntext}>Get Started</Text>
      </TouchableOpacity>


    </View>
  )

}
const styles = StyleSheet.create({

  para1: {

    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: '#5A61C9',
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(4)

  },

  mybtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(6)
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold'
  },

})