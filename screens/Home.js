import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const Home = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onClose('ADD_NOTE')}
        style={styles.noteButton}
      >
        <Text style={styles.textBtn}>New Note</Text>
        <Ionicons
          style={styles.ionIcons}
          name="ios-add-circle-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onClose('SEE_NOTES')}
        style={styles.noteButton}
      >
        <Text style={styles.textBtn}>See Notes</Text>
        <Ionicons
          style={styles.ionIcons}
          name="ios-add-circle-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
  },
  noteButton: {
    width: 280,
    height: '30%',
    borderRadius: 10,
    marginVertical: 30,
    border: 'none',
    backgroundColor: '#a8dadc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
  },
  ionIcons: {
    fontSize: 20,
  },
});

export default Home;
