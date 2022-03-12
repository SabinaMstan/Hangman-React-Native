
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../utils/Styles';

const LetterButton = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('teal');
  let countLetters = 0;

  useEffect (() => {
    if (props.gameOn === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [props.gameOn]);

  const pressButton = () => {
    setDisabled(true);
    setBackgroundColor('gray');
    props.getLetter(props.letter);
  }

  return (
    <TouchableOpacity onPress = {pressButton} style = {[styles.letterButton, {backgroundColor}]} disabled = {disabled}>
      <Text style = {{color: 'white'}}>{props.letter}</Text>
    </TouchableOpacity>
  );
}

export default LetterButton;
