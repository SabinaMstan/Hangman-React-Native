import React from 'react';

export const validateLetter = (partialWord, letter, word, setLives, lives) => {
  let found = 0;
  const newWord = partialWord.map((item) => {
    if (letter === word[item.id]) {
      item.letter = letter;
      item.found = 1;
      found = 1;
    }
    return item;
  });
  if (found === 0) {
    setLives(--lives);
  }
  return newWord;
}
