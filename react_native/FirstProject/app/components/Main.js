import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Note from './Note'

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      noteText: ''
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote() {
    if(this.state.noteText){
       let date = new Date();
       this.state.notes.push({
           'date': date.getDate() + '/' + (date.getMonth() + 1 
           + '/' + date.getFullYear()),
           'note': this.state.noteText
       });
       this.setState({notes: this.state.notes});
       this.setState({noteText: ''})
    }
  }
  deleteNote(key){
    this.state.notes.splice(key, 1);
    this.setState({notes: this.state.notes});
  }

  render() { 
    
    let notes = this.state.notes.map((note, key) => {
        return <Note key={key} keyVal={key} note={note} 
                deleteMethod={() => this.deleteNote(key)} />
    });

    return (
    // <KeyboardAvoidingView>
      <View style={styles.container}>
        
        <View style={styles.header}>
            <Text style={styles.headerText}>My Notes</Text>
        </View> 

        <ScrollView>{notes}</ScrollView>

        <View style={styles.footer}>
            <TextInput style={styles.textInput} onChangeText={(noteText) => this.setState({noteText})} 
            value={this.state.noteText} placeholder='Make a note'></TextInput>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
            <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

    // </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth: 6,
    borderBottomColor: '#98B3B7'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  
  textInput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 20,
    backgroundColor: '#ddd',
    borderTopWidth: 2,
    borderTopColor: '#ddd'
  },
  footer: {
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#98B3B7',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18
  }
});


