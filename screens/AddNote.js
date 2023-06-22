import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';

const AddNote = props => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const handleClick = () => {
    if (!text.trim() || !title.trim()) {
      alert('Please enter a note !');
      return;
    }
    props.onSave({text, title});

    setTitle('');
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.addNoteContainer}>
        <Text style={styles.addNoteTitle}>Add Note</Text>
        <View>
          <TextInput
            value={title}
            placeholder="Title"
            onChangeText={title => setTitle(title)}
            style={styles.inputText}
          />
        </View>
        <View>
          <TextInput
            value={text}
            multiline={true}
            numberOfLines={2}
            placeholder="Text"
            onChangeText={text => setText(text)}
            style={styles.inputText}
          />
        </View>
        <Button onPress={handleClick} title="Add Note" color="#457b9d" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 18,
    flex: 1,
    width: '80%',
    height: '80%',
  },
  addNoteContainer: {
    borderRadius: 10,
    backgroundColor: '#a8dadc',
    padding: 15,
    margin: 10,
  },
  inputText: {
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 10,
    margin: 10,
  },
  addNoteTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
export default AddNote;
