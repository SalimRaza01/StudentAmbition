import React from 'react';
import { View, Text} from 'react-native';
import { Picker } from "@react-native-picker/picker";

const DropdownPage = ({ navigation }) => {
  const handleDropdownChange = (selectedScreen) => {
    navigation.navigate(selectedScreen);
  };

  return (
    <View>
      <Text>Select a screen:</Text>
      <Picker onValueChange={handleDropdownChange}>
        <Picker.Item label="Screen A" value="ScreenA" />
        <Picker.Item label="Screen B" value="ScreenB" />
      </Picker>
    </View>
  );
};

export default DropdownPage;
