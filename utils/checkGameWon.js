import React from 'react';

export const checkGameWon = (partialWord) => {
    let winner = 1;
    for (let item of partialWord) {
      if (item.found === 0) {
        winner = 0;
      }
    }
  return winner;
}
