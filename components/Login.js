import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


export default function Login(props) {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelection] = useState(false);

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        alert('You Logged in');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
        alert.error(error);
      });
  }

  const NextScreen = () => {
    navigation.navigate('CompleteReg');
  }



  const handleEmailChange = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };
  const handlePassChange = text => {
    const passtrim = pass.trim()
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passRegex.test(text)) {
      setPassError('Password must contain Character & Special Character or Number');
    } else {
      setPassError('');
    }
    setPass(text);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (

    <View>

      <Image style={styles.logo} source={require('../assets/Logo.png')} />

      <Text style={styles.para1}> Login </Text>


      <View style={styles.email}>
        <Image style={styles.elogo} source={require('../assets/Message.png')} />
        <TextInput
          placeholder="Email" placeholderTextColor={'grey'} color='black'
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}


      <View style={styles.pass}>

        <Image style={styles.plogo} source={require('../assets/Lock.png')} />
        <TextInput
          placeholder="Password" placeholderTextColor={'grey'} color='black'
          value={pass}
          onChangeText={handlePassChange} />

      </View>
      {passError ? <Text style={styles.error}>{passError}</Text> : null}

      <View style={styles.checkb}>

        <CheckBox style={{ marginLeft: responsiveWidth(5), marginTop: responsiveHeight(1), borderColor: 'grey' }}
          value={selected}
          onPress={handleCheckboxChange}
          onValueChange={setSelection}
          tintColors={{ true: '#2530A3', false: 'grey' }}
        />
        <Text style={styles.checktext} >Remember Me </Text>
      </View>
      {isChecked ? <Text style={styles.checkmark}>✓</Text> : null}

      <TouchableOpacity style={styles.mybtn}
        // onPress={() => { signIn(); }}
        onPress={() => { [signIn(), NextScreen()]; }}
      >
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>

      <View style={styles.loginlink}>
        <Text>Don't have account ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}>
          <Text style={{ color: '#C58BF2' }}> Create New </Text>
        </TouchableOpacity>
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    // marginLeft: responsiveWidth(15),
    marginTop: responsiveHeight(15),
    alignSelf: 'center',
  },
  para1: {

    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: '#5A61C9',
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(38)

  },
  email: {

    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 25,
    borderWidth: 1,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3)
  },
  pass: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 25,
    borderWidth: 1,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2)
  },
  elogo: {

    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2.4),
    marginRight: responsiveWidth(3),
  },
  plogo: {

    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2.4),
    marginRight: responsiveWidth(3),
  },
  checkb: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(1.5)
  },
  checktext: {
    fontSize: responsiveFontSize(1.4),
    color: 'grey',
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(20),
    fontFamily: 'poppins'
  },

  loginlink: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(25),
    marginTop: responsiveHeight(3)
  },
  mybtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(10)
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold'
  },

});






