import React from 'react';
import { TextInput, FlatList, Text, View } from 'react-native';
import { styles } from '../utils/Styles';

const DisplayWord = (props) => {

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
      data = {props.word}
      renderItem = {renderSpace}
      numColumns = {props.NR_COL}
      />
  </View>
  );
}

export default DisplayWord;
