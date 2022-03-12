import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import * as Updates from 'expo-updates';
import { styles } from './utils/Styles';
import { validateLetter } from './utils/ValidateLetter';
import GenerateKeyboard from './components/Keyboard';
import DisplayWord from './components/DisplayWord';
import GameState from './components/GameState';

const App = () => {
  const listWords = ['potatoe', 'supercalifragilistic', 'fear', 'flamenco', 'pistachio']
  const NR_COL = 10;
  const [letter, setLetter] = useState('');
  const [chosenWord, setChosenWord] = useState('');
  const [gameOn, setGameOn] = useState(1);
  const [countLetters, setCountLetters] = useState(0);
  const [lives, setLives] = useState(11);
  const [wordState, setWordState] = useState([]);

  useEffect (() => {
    const index = Math.floor(Math.random() * (listWords.length - 1) + 1);
    setChosenWord(listWords[index]);
  }, []);

  const word = Array.from(chosenWord);

  useEffect (()=> {
    const wordToGuess = word.map((letter, index) => {
      return {'id': index, 'letter': '_'};
    });
    setWordState(wordToGuess);
  }, [chosenWord]);

  useEffect(() => {
    setWordState(validateLetter(wordState, letter, word, setLives, lives, countLetters, setCountLetters));
  }, [letter]);

  useEffect (() => {
    if (countLetters === word.length || lives === 0) {
      setGameOn(0);
    } else {
      setGameOn(1);
    }
  }, [lives, countLetters]);

  const restart = () => {
    Updates.reloadAsync();
  }

  return (
    <View style = {{alignItems: 'center'}}>
      <DisplayWord word = {wordState} NR_COL = {NR_COL}/>
      <GameState lives = {lives} score = {countLetters} length = {word.length} />
      <GenerateKeyboard getLetter = {setLetter} gameOn = {gameOn} NR_COL = {NR_COL}/>
      <TouchableOpacity onPress = {restart} style = {styles.restartButton}>
        <Text style = {{color: 'white'}}>RESTART</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
