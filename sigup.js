import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { db } from './firestore'
import { ref, set } from 'firebase/database'



export default function Login({navigation}) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conform, setConform] = useState();
  const [color, setColor] = useState('white');


  const colors = "#ECD5B6";
  const colors2 = "#F8A5FF";
  const color3 = "#FF6AA8";

  
  
  const dataAddon = () => {
    set(ref(db, "posts/" + username), {
    username: username,
    email : email,
    Password :password,
    conform: conform,
  }
  );
    setConform("");
    setPassword("");
    setEmail("");
    setUsername("");
  };

  const handleColor = () => {
    setColor(colors);    
  }

  const handleColor1 = () =>{
    setColor(colors2);
  }

  const handleColor2 = () =>{
    setColor(color3);
  }
  

  const handelname = (text) => {
    setUsername(text);
  }

  const handelEmailChange = (text) => {
    setEmail(text)
  }

  const handelpasswordChange = (text) => {
    setPassword(text)
  }

  const handelConformChange = (text) => {
    setConform(text)
  }

  const handelUp = () =>{
    if(email && username && password && conform != ''){
      navigation.navigate('data');
      dataAddon();

    }
    else{
      alert("Please fill up the fields");
    }


    }

    const handelLogin = () =>{
      navigation.navigate('Login');
    }
  return (
    <ImageBackground
      source={require('./background image.png')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{flexDirection:"row", marginLeft:1100}}>
        <Text  onPress={handleColor} style={{borderWidth:20, borderColor:colors, borderRadius:100,marginLeft:5}}></Text>
        <Text  onPress={handleColor1} style={{borderWidth:20, borderColor:colors2, borderRadius:100,marginLeft:5}}></Text>
        <Text  onPress={handleColor2} style={{borderWidth:20, borderColor:color3, borderRadius:100,marginLeft:5}}></Text>


      </View>
      <View style={styles.box}>
        <Text style={{ fontSize: 35, color: color, marginLeft: 50 }}>Create a New Account</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name='user' size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='Username'
            placeholderTextColor={"#737373"}
            value={username}
            onChangeText={handelname}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name='envelope' size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='Email ID'
            placeholderTextColor={"#737373"}
            value={email}
            onChangeText={handelEmailChange}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name='lock' size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor={"#737373"}
            value={password}
            onChangeText={handelpasswordChange}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <MaterialIcon name="lock" size={20} color={blur} style={{ marginTop: 30, marginLeft: 30, color: color, marginRight: 20 }} />
          <TextInput
            style={styles.input}
            placeholder='conform password'
            placeholderTextColor={"#737373"}
            value={conform}
            onChangeText={handelConformChange}
          />
        </View>
        <View>
       <Pressable style={styles.click} onPress={handelUp}>
          <Text style={{ color: "white", padding: 10, marginLeft: 90 }}>Sign up</Text>
        </Pressable>
        <Text style={styles.login} onPress={handelLogin}>Already a user <span style={{color:'red'}} >Login</span></Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 290,
    height: 420,
    borderWidth: 1,
    borderColor: 'pink',
    marginLeft: 450,
    backgroundColor: "black"
  },

  input: {
    height: 20,
    borderBottomWidth: 1,
    borderColor: 'white', 
    fontSize: 16,
    paddingVertical: 10,
    marginTop: 25,
    padding: 10,
    color: "white"
  },

  login:{
    alignSelf:'center',
    color:'white',
    padding:10,

  },


  click: {
    width: 250,
    height: 40,
    borderWidth: 1,
    backgroundColor: "black",
    borderColor: "white",
    marginLeft: 20,
    color: "white",
    marginTop: 30
  }
});
