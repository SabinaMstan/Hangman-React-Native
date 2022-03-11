import React, { useState, useEffect } from 'react';
import { TextInput, FlatList, Text, View } from 'react-native';
import { styles } from '../utils/Styles';
import { validateLetter } from '../utils/ValidateLetter';
import GameState from './GameState';

const DisplayWord = (props) => {
  const [countLetters, setCountLetters] = useState(0);
  const [lives, setLives] = useState(11);
  const word = Array.from(props.word);
  const [wordState, setState] = useState([]);
  useEffect (()=> {
    const wordToGuess = word.map((letter, index) => {
      return {'id': index, 'letter': '_'};
    });
    setState(wordToGuess);
  }, [props.word]);

  useEffect(() => {
    setState(validateLetter(wordState, props.letter, word, setLives, lives, countLetters, setCountLetters));
  }, [props.letter]);

  useEffect (() => {
  if (countLetters === props.word.length || lives === 0) {
    props.setGameOn(0);
  } else {
    props.setGameOn(1);
  }
  }, [lives, countLetters]);

  const renderSpace = ({item}) => {
    return (
      <TextInput
        style = {styles.input}
        editable = {false}
        value = {item.letter}
      />
    );
  }

  return (
  <View style = {{alignItems: 'center'}}>
    <Text>{'\n\n'}Guess the word:</Text>
    <FlatList
      data = {wordState}
      renderItem = {renderSpace}
      numColumns = {props.NR_COL}
      />
    <GameState lives = {lives} score = {countLetters} word = {word} />
  </View>
  );
}

export default DisplayWord;
