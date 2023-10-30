import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');
  const [viewsEnabled, setViewsEnabled] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [attempt, setAttempt] = useState(3);
  const [score, setScore]  = useState(0);
let realscore = 0;
  const handleText = () => {
    setText('');
    setDisplay('');
    setViewsEnabled(!viewsEnabled);
    setAttempt(3);

  };

  const handleSave = () => {
    if (!isNaN(text) && parseInt(text) !== 0) {
      const min = 1;
      const max = 100;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(newRandomNumber);
      if (parseInt(text) > newRandomNumber && attempt != 0) {
        const reattempt = attempt-1;
        alert(`Your number is greater than the guess try again you have ${reattempt} attempts`);
        setAttempt(reattempt);
        setScore(realscore) + 1;

      } else {
        if(parseInt(text) == newRandomNumber){
          alert('won the game');
          setDisplay(text);
          setViewsEnabled(true);
          setAttempt(3);
          setScore()
        }
        else if(attempt == 0){
          alert('You Lose');
          setDisplay(text);
          setViewsEnabled(true);
          setAttempt(3);
          
        }
        else{
        const reattempt = attempt-1;
        alert(`Your number is less than the guess. Try again. You have ${reattempt} attempts.`);
        setAttempt(reattempt);
        }
      }
    } else {
      alert('Invalid number');
    }
  };



  

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lightblue.svg/1200px-Lightblue.svg.png',
        }}
        style={{ width: 300, height: 50 }}>
        <Text  style={{ fontWeight: 'bold', marginTop: 20, marginLeft: 70, fontSize: 20 }}>
          Guess a Number
        </Text>
      </ImageBackground>
      <View style={styles.element}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Start a New Game</Text>
        {viewsEnabled && (<Text style={{fontSize:20, color:'green'}}>Your score is :{score}</Text>)}
        <View style={styles.box}>
          <Text style={{ fontWeight: 'bold', fontSize: 10, marginLeft: 70 }}>Select a Number</Text>
          <TextInput
            style={styles.input}
            placeholder=" "
            value={text}
            onChangeText={(inputText) => setText(inputText)}
            keyboardType="numeric"
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Pressable onPress={handleText}>
              <Text style={{ color: 'red', padding: 10 }}>Reset</Text>
            </Pressable>
            <Pressable onPress={handleSave}>
              <Text style={{ color: 'green', padding: 10 }}>Confirm</Text>
            </Pressable>
          </View>
        </View>
        {viewsEnabled && (
          <View style={styles.box1}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 50 }}>You Selected</Text>
            <Text style={{ borderWidth: 2, borderColor: 'blue', color: 'blue', width: 50, marginLeft: 90 }}>
              {display}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 50 }}>Random Number</Text>
            <Text style={{ borderWidth: 2, borderColor: 'blue', color: 'blue', width: 50, marginLeft: 90 }}>
              {randomNumber}
            </Text>
            <Text onPress={handleText} style={{ color: 'blue', fontSize: 20, marginLeft: 60, marginTop: 30 }}>Start Game</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },

  element: {
    width: 300,
    height: 500,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  input: {
    width: '20%',
    height: '20%',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    padding: 10,
    marginLeft: 90,
  },

  box: {
    width: '80%',
    height: '30%',
    borderWidth: 1,
    borderColor: 'black',
    shadowRadius: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowColor: 'black',
    paddingTop: 10,
    marginTop: 100,
    backgroundColor: 'white',
  },

  box1: {
    width: '80%',
    height: '30%',
    borderWidth: 1,
    borderColor: 'black',
    shadowRadius: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowColor: 'black',
    paddingTop: 10,
    marginTop: 100,
  },
});
