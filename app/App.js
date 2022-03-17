import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './utils/Styles';
import GenerateKeyboard from './components/Keyboard';
import DisplayWord from './components/DisplayWord';
import GameState from './components/GameState';
import RestartButton from './components/RestartButton';

const App = () => {
  const listWords = ['potatoe', 'supercalifragilistic', 'fear', 'flamenco', 'pistachio']
  const NR_COL = 10;
  const [chosenWord, setChosenWord] = useState('');
  const [lives, setLives] = useState(11);
  const [partialWord, setPartialWord] = useState([]);

  useEffect (() => {
    const index = Math.floor(Math.random() * (listWords.length - 1) + 1);
    setChosenWord(listWords[index]);
  }, []);

  const word = Array.from(chosenWord);

  useEffect (()=> {
    const wordToGuess = word.map((letter, index) => {
      return {'id': index, 'letter': '_', 'found': 0};
    });
    setPartialWord(wordToGuess);
  }, [chosenWord]);

  return (
    <View style = {{alignItems: 'center'}}>
      <DisplayWord word = {partialWord} NR_COL = {NR_COL}/>
      <GameState lives = {lives} partialWord = {partialWord}/>
      <GenerateKeyboard word = {word} getPartialWord = {setPartialWord} partialWord = {partialWord} lives = {lives} getLives = {setLives} NR_COL = {NR_COL}/>
      <RestartButton />
    </View>
  );
}

export default App;
