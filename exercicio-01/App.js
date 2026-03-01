import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';


export default function App() {
  const [nome, nomeModificado] = useState('');
  const enviarNome = () =>{
    Alert.alert('Nome:', nome)
  }
  return (
    <View style={styles.container}>
      <Text>Digite seu nome no campo abaixo</Text>

    <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        value={nome}
        onChangeText={nomeModificado}
      />

      <Button
        title="Aperte Aqui"
        onPress={enviarNome}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
