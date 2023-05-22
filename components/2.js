import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

export default function ddA(props) {

  return (

    <View >
  
      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('MyDrawer')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Image style={styles.wpic} source={require('../assets/menu.png')} />
        </LinearGradient>
      </TouchableOpacity>


    </View>
  )

}


const styles = StyleSheet.create({

  wpic: {
    position: 'absolute',
    height: responsiveHeight(3),
    width: responsiveWidth(6),
   alignSelf:'center',
    marginTop: responsiveHeight(2),

},
container: {
  position: 'absolute',
  width: responsiveWidth(14),
  height: responsiveHeight(7),
},
  linearGradient: {
    flex: 1,
    borderRadius: 4,
    justifyContent: "center",
  },

})

