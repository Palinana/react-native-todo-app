import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class Note extends Component {

  render() {
    return (
      <View key={this.props.keyVal} style={styles.note}> 
        
        <Text style={styles.noteText}>{this.props.note.date}</Text>
        <Text style={styles.noteText}>{this.props.note.note}</Text>

        <TouchableOpacity style={styles.deleteNote} onPress={this.props.deleteMethod}>
            <Text style={styles.deleteNoteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed'
},
noteText: {
    paddingLeft: 20,
    margin: 10,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63'
},
deleteNote: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
},
deleteNoteText: {
    color: 'red'
}
});
