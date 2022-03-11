import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import * as Updates from 'expo-updates';
import { styles } from './utils/Styles';
import GenerateKeyboard from './components/Keyboard';
import DisplayWord from './components/DisplayWord';

const App = () => {
  const listWords = ['potatoe', 'supercalifragilistic', 'fear', 'flamenco', 'pistachio']
  const [letter, setLetter] = useState('');
  const [word, setWord] = useState('');
  const [gameOn, setGameOn] = useState(1);
  const NR_COL = 10;

  useEffect (() => {
    const index = Math.floor(Math.random() * (listWords.length - 1) + 1);
    setWord(listWords[index]);
  }, []);

  const restart = () => {
    Updates.reloadAsync();
  }

  return (
    <View>
      <DisplayWord word = {word} letter = {letter} setGameOn = {setGameOn} NR_COL = {NR_COL}/>
      <GenerateKeyboard getLetter = {setLetter} gameOn = {gameOn} NR_COL = {NR_COL}/>
    <View style = {{alignItems: 'center'}}>
      <TouchableOpacity onPress = {restart} style = {styles.restartButton}>
        <Text style = {{color: 'white'}}>RESTART</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default App;
