import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
const handelnav = ()=>{
    navigation.navigate("Sigup");
    
}
const DATA = [
  {
    id: 'id1',
    title: 'Ash Ketchum',
    lastseen: 'today',
    About: 'Hi! There...',
    ImageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1b6KPldr2wLV9r4pI2ibJClZF96moOvoSw&usqp=CAU',
  },
  {
    id: 'id2',
    title: 'Fazil',
    lastseen: 'Online',
    ImageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8kJDstJ_GCu3gV9VGaL5QaW0EMuG7viTQA&usqp=CAU',
    About: 'You reacted 👍 to yes',
  },
  {
    id: 'id3',
    title: 'My Buddy!',
    lastseen: '6/3/23',
    About: 'Hi! Fazil',
    ImageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGuN2OCtr6koIcTaymR9C8ctkHko5fSTV2Q&usqp=CAU',
  },
  // Add more chat items here...
];

const ChatItem = ({ title, ImageUri, About, lastseen }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={{ uri: ImageUri }} />
    <View style={styles.column}>
      <View style={styles.textRow}>
        <Text style={styles.leftText}>{title}</Text>
        <Text style={styles.rightText}>{lastseen}</Text>
      </View>
      <Text style={styles.supportingText}>{About}</Text>
    </View>
  </View>
);

function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>WhatsApp</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ChatItem
            title={item.title}
            About={item.About}
            lastseen={item.lastseen}
            ImageUri={item.ImageUri}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
      <Button title="Go to Status" onPress={handelnav}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    marginBottom: 10,
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderColor: 'green',
    paddingVertical: 5,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#003797',
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 14,
    color: 'gray',
  },
  supportingText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Chat;
