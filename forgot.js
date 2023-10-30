import React from 'react'
import { Text, View,ScrollView,StyleSheet } from 'react-native'
import { db } from './firestore'
import { ref, onValue} from 'firebase/database'
import { useState, useEffect } from 'react'


const FetchData = () => {
    const [data, setData] = useState([]);

useEffect(() => {
    const countref = ref(db, 'post/');
    onValue(countref, (snapshot) => {
        const data = snapshot.val();
        const newPost = Object.keys(data).map(key => ({
        id:key,
        ...data[key]
         }));
         setData(newPost);
    });
},
[alert('data fecthed')]);






  return (
    <ScrollView  contentContainerStyle={StyleSheet.container}>
      <Text style={styles.header}>FetchData</Text>
      {data.map(item => (
        <View style={styles.item} key={item.id}>
            <Text>CR.NOI: {item.name}</Text>
            <Text>Selection of Law: {item.age}</Text>
       </View>
      ))};
      

    </ScrollView>

  
      
  );
      };
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderWidth:20,
        margin:20,
        padding:20
    },
    header:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
    },
    item:{
        backgroundColor:"black",
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
    },
});

export default FetchData;