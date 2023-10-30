import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { db } from './firestore'
import { ref, set } from 'firebase/database'




export default function App({navigation}) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conform, setConform] = useState();


  
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


const linkedinprofile = 'https://www.linkedin.com/in/mohamed-fazil-1-76013827b/';
const facebookprofile = 'https://www.facebook.com/profile.php?id=100089489905908';
const google = 'https://www.google.com/';


const handelnavigate = () =>{
       navigation.navigate('Login');
}
  const handelNameChange = (text) => {
    setUsername(text);
  }

  const handelEmailChange = (text) => {
    setEmail(text)
  }
  const handelPasswordChange = (text) => {
    setPassword(text);

  }

  const handelconformChange = (text) =>{
    setConform(text)
  }

  const handelLinkedInPress = () =>{
    Linking.openURL(linkedinprofile);
  }

  const handelFacebookPress = () =>{
    Linking.openURL(facebookprofile);
  }
  const handelgoogle = () =>{
    Linking.openURL(google);
  }

  const handelJump = () =>{
     if(username && email && password && conform !== '') {
      if(password == conform){
      navigation.navigate('data');
      dataAddon();
      }
      else{
        alert("Password must me same!!")
      }

    }
else{
  alert("Please fill all the fields")
}
  }

 

  const handelnav = () => {
    navigation.navigate('Chat');

  }

  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <Text style={styles.heading}>Login</Text>
        <div style={{ flexDirection: "row" }}>
          <Text style={styles.title}>username               </Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Username'
            value={username}
            onChangeText={handelNameChange}
          />
        </div>

        <div style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Email                     </Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Email ID'
            value={email}
            onChangeText={handelEmailChange}
          />
        </div>

           <div style={{ flexDirection: "row" }}>
          <Text style={styles.title}>password               </Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Password'
            value={password}
            onChangeText={handelPasswordChange}
          />
        </div>

           <div style={{ flexDirection: "row" }}>
          <Text style={styles.title}>conform password</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your password again'
            value={conform}
            onChangeText={handelconformChange}
          />
        </div>      
       

        <TouchableOpacity style={styles.button}>
          <Text onPress={handelJump} style={{fontStyle:"italic", fontWeight:"bold", marginLeft:100, color:"white"}}>Sumit</Text>
        </TouchableOpacity>

        <div style={styles.icon}>
          <Icon name='google' size={20} color={blur} style={{marginLeft:30}} onPress={handelgoogle}/>
          <Icon name='facebook' size={20} color={blur}style={{marginLeft:30}} onPress={handelFacebookPress}/>
          <Icon name='linkedin' size={20} color={blur} style={{marginLeft:30}} onPress={handelLinkedInPress}/>

        </div>
       

     
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D5D5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 4,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 130

  },

  box: {
    width: 390,
    height: 500,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,

  },
  input: {
    width: 200,
    height: 30,
    borderWidth: 2,
    marginTop: 30,
    marginLeft: 30

  },

  title: {
    fontSize: 15,
    fontStyle: "italic",
    marginLeft: 20,
    marginTop: 30
  },

  button:{
    width:300,
    height:30,
    backgroundColor:"#000C55",
    borderWidth:3,
    borderColor:"black",
    marginLeft:60,
    marginTop:50,
    borderRadius:10

  },

  icon:{
    flexDirection:"row",
    marginLeft:100,
    marginTop:50
  }
});
