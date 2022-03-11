
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../utils/Styles';

const Button = (props) => {
  const [disable, setDisable] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('teal');
  let countLetters = 0;

  useEffect (() => {
    if (props.gameOn === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [props.gameOn]);

  const pressButton = () => {
    setDisable(true);
    setBackgroundColor('gray');
    props.getLetter(props.letter);
  }

  return (
    <TouchableOpacity onPress = {pressButton} style = {[styles.letterButton, {backgroundColor}]} disabled = {disable}>
      <Text style = {{color: 'white'}}>{props.letter}</Text>
    </TouchableOpacity>
  );
}

export default Button;
