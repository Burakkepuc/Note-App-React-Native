import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import Note from '../components/Note';

const AllNotes = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <Text>To delete a note, please touch on the specific note.</Text>
      <FlatList
        data={props.notes}
        renderItem={({item}) => (
          <Note note={item} onDelete={props.deleteTheNote} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: '#353535',
    padding: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default AllNotes;
