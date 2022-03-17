import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as Updates from 'expo-updates';
import { styles } from '../utils/Styles';

const RestartButton = () => {

  const restart = () => {
    Updates.reloadAsync();
  }

  return (
    <View style = {{alignItems: 'center'}}>
      <TouchableOpacity onPress = {restart} style = {styles.restartButton}>
        <Text style = {{color: 'white'}}>RESTART</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RestartButton;
