import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const img1 = require('./assets/img1.jpg');
const img2 = require('./assets/img2.jpg');
const img3 = require('./assets/img3.jpg');
const img4 = require('./assets/img4.jpg');
const img5 = require('./assets/img5.jpg');
const img6 = require('./assets/img6.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Galeria</Text>

      <ScrollView style = {styles.scroll} contentContainerStyle={styles.containerConteudo}>
        <Image source={img1} style={styles.imagem} />
        <Image source={img2} style={styles.imagem} />
        <Image source={img3} style={styles.imagem} />
        <Image source={img4} style={styles.imagem} />
        <Image source={img5} style={styles.imagem} />
        <Image source={img6} style={styles.imagem} />
      </ScrollView>
      
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 15,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  containerConteudo: {
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingBottom: 40
  },
  imagem: {
    width: 300, 
    height: 250, 
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});