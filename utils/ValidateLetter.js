import React from 'react';

export const validateLetter = (wordState, letter, word, setLives, lives, countLetters, setCountLetters) => {
  let found = 0;
  const newWord = wordState.map((item) => {
    if (letter === word[item.id]) {
      item.letter = letter;
      setCountLetters(++countLetters);
      found = 1;
    }
    return item;
  });
  if (found === 0) {
    setLives(--lives);
  }
  return newWord;
}
