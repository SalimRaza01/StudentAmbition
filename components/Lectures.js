import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { SearchBar } from 'react-native-screens';
import SelectBranch from './SelectBranch';
import SelectCourse from './SelectCourse';
import Registration from './Registration';
import SplashScreen from './SplashScreen';
import Login from './Login';

export default function Lectures(props) {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const navigation = useNavigation();

    const handle = () => {
        if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE') {
            navigation.navigate('Login');
        } else if (selectedValue1 === 'Option 2' && selectedValue2 === 'Option B') {
            navigation.navigate('Registration');
        } else {
            navigation.navigate('SplashScreen');
        }
    };

    return (

        <View>
            <Text style={styles.para1}>
                Select Preference
            </Text>
            <View style={styles.weight}>
                <Image style={styles.wlogo} source={require('../assets/branch.png')} />
                <Picker
                    selectedValue={selectedValue1}
                    onValueChange={(itemValue) => setSelectedValue1(itemValue)} style={styles.picker}
                >
                    <Picker.Item label="      Select an option" value="" />
                    <Picker.Item label="      B-Tech" value="B-Tech" />
                    <Picker.Item label="      Option 2" value="Option 2" />
                </Picker>
            </View>
            <View style={styles.weight}>
                <Image style={styles.wlogo} source={require('../assets/branch.png')} />
                <Picker
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue) => setSelectedValue2(itemValue)} style={styles.picker}
                >
                    <Picker.Item label="     Select an option" value="" />
                    <Picker.Item label="     CSE" value="CSE" />
                    <Picker.Item label="     Option B" value="Option B" />
                </Picker>
            </View>

            <TouchableOpacity style={styles.mybtn}
                onPress={handle}
            >
                <Text style={styles.btntext}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    wlogo: {
        position: 'absolute',
        width: responsiveWidth(4.5),
        height: responsiveHeight(2.6),
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(2),
    },

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
    weight: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: 'black',
        borderRadius: 25,
        borderWidth: 1,
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        marginLeft: responsiveWidth(10),
        marginTop: responsiveHeight(2),
    },
    picker: {
        position: 'absolute',
        color: 'grey',
        width: responsiveWidth(80),
        height: responsiveHeight(7.8),
        fontSize: responsiveFontSize(1),
        marginTop: responsiveHeight(-0.9)

        // backgroundColor: 'green'
    },
})

