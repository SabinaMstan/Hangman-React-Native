import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {getAlphabet} from '../utils/Alphabet';
import Button from './Button';
import {styles} from '../utils/Styles';

const GenerateKeyboard = (props) => {
  const alphabet = getAlphabet();
  const [currentLetter, setCurrentLetter] = useState('');

  const generateButtons = ({item}) => {
    props.getLetter(currentLetter);
    return (
    <Button letter = {item} getLetter = {setCurrentLetter} gameOn = {props.gameOn}/>
    );
  };

  return (
  <FlatList
     style = {{alignItems: 'center'}}
     data = {alphabet}
     renderItem = {generateButtons}
     numColumns = {10}
    />
  );
}

export default GenerateKeyboard;