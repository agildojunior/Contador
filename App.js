import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.letra}>CONTADOR DE PESSOAS</Text>
      <View style={styles.container3}><Text style={styles.letra2}>{count}</Text></View>
      <TouchableOpacity style={styles.container2} onPress={() => setCount(count + 1)}>
        <Text style={styles.letra}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container2} onPress={() => setCount(count - 1)}>
        <Text style={styles.letra}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#7bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#85a',
    width: 150,
    height: 50,
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 7,
  },
  container3: {
    backgroundColor: '#fff',
    width: 110,
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  letra: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  letra2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#111',
  },
});
