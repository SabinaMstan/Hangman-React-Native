import React from 'react';

export const getAlphabet = () => {
  const a = Array(26).fill(0);
  let i = 10;
  const alphabet = a.map((letter) => {
    letter = i.toString(36);
    ++i;
    return letter;
  });
  return alphabet;
}
