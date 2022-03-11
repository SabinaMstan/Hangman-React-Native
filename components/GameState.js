import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const GameState = (props) => {
  const [message, setMessage] = useState(`\nYou have ${props.lives} lives.\n\n`)
  useEffect (() => {
  if (props.score === props.word.length) {
    setMessage('\nYou won!\n\n');
  } else if (props.lives === 0) {
    setMessage('\nYou lost!\n\n');
  } else {
    setMessage(`\nYou have ${props.lives} lives.\n\n`);
  }
  }, [props.lives, props.score]);
  return (
    <Text>{message}</Text>
  );
}

export default GameState;
