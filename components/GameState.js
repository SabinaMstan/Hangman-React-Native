import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { checkGameWon } from '../utils/checkGameWon';

const GameState = (props) => {
  const [message, setMessage] = useState(`\nYou have ${props.lives} lives.\n\n`);

  useEffect (() => {
    const gameWon = checkGameWon(props.partialWord);

    if (gameWon === 1) {
      setMessage('\nYou won!\n\n');
    } else if (props.lives === 0) {
      setMessage('\nYou lost!\n\n');
    } else {
      setMessage(`\nYou have ${props.lives} lives.\n\n`);
    }
  }, [props.lives, props.partialWord]);

  return (
    <Text>{message}</Text>
  );
}

export default GameState;
