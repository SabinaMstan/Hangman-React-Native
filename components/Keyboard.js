import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { getAlphabet } from '../utils/Alphabet';
import LetterButton from './LetterButton';
import { styles } from '../utils/Styles';
import { validateLetter } from '../utils/ValidateLetter';
import { checkGameWon } from '../utils/checkGameWon';

const GenerateKeyboard = (props) => {
  const alphabet = getAlphabet();
  const [currentLetter, setCurrentLetter] = useState('');
  const [gameOn, setGameOn] = useState(1);

  useEffect(() => {
    props.getPartialWord(validateLetter(props.partialWord, currentLetter, props.word, props.getLives, props.lives));
  }, [currentLetter]);

  useEffect (() => {
    const gameWon = checkGameWon(props.partialWord);
    if (gameWon === 1 || props.lives === 0) {
      setGameOn(0);
    } else {
      setGameOn(1);
    }
  }, [props.lives, props.partialWord]);


  const generateButtons = ({item}) => {
    return (
    <LetterButton letter = {item} getLetter = {setCurrentLetter} gameOn = {gameOn}/>
    );
  };

  return (
  <FlatList
     style = {{alignItems: 'center'}}
     data = {alphabet}
     renderItem = {generateButtons}
     numColumns = {props.NR_COL}
    />
  );
}

export default GenerateKeyboard;
