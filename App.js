import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import AllNotes from './screens/AllNotes';
import ButtonPrev from './components/ButtonPrev';
import AddNote from './screens/AddNote';

export default function App() {
  const [screen, setScreen] = useState('HOME');
  const [notes, setNotes] = useState([]);
  let content;

  const addNewNote = note => {
    const id = Math.random() * 9999;
    const newNote = {id, ...note};
    setNotes([...notes, newNote]);
  };
  const deleteNote = id => {
    setNotes(prevState => prevState.filter(note => note.id !== id));
  };

  if (screen === 'ADD_NOTE') {
    content = <AddNote onSave={addNewNote} />;
  } else if (screen === 'SEE_NOTES') {
    content = <AllNotes notes={notes} deleteTheNote={deleteNote} />;
  } else if (screen === 'HOME') {
    content = (
      <Home
        onClose={data => {
          setScreen(data);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      {screen === 'HOME' ? null : (
        <ButtonPrev onButtonClick={data => setScreen(data)} />
      )}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
