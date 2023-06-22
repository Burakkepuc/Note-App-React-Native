import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Note = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onDelete(props.note.id);
      }}
    >
      <View style={styles.container}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#353535'}}>
          {props.note.title}
        </Text>
        <Text style={{color: '#353535'}}>{props.note.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#3c6e71',
    borderWidth: 3,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    padding: 15,
    marginTop: 12,
  },
});
export default Note;
