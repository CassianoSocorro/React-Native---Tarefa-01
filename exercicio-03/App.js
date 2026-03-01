import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [itens, setItens] = useState([]);
  const [texto, setTexto] = useState('');

  const addItem = () => {
    setItens([...itens, texto]);
    setTexto(''); 
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Exercício 03 - Lista de Itens Dinâmica</Text>

    <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item."
          value={texto}
          onChangeText={setTexto}
        />
        <Button title="Adicionar" onPress={addItem} />
      </View>

      <ScrollView style={styles.lista}>
        {itens.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemTexto}>- {item}</Text>
          </View>
        ))}
      </ScrollView>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  lista: {
    flex: 1, 
  },
  item: {
    padding: 5,
  },
  itemTexto: {
    fontSize: 22,
  },
});
