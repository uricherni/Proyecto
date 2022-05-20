import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Mascotas from './Mascotas';
import { getMascotas } from 'http://10.144.1.37:54117/Api/Refugios/getRefugio/1';

export default function App() {
  const [mascotas, setMascotas] = useState([]);

  const [name, setName] = useState('Jade Arevalos');

  const fetchUser = async () => {
    try {
      const response = await getMascotas('29392', '28493');
      console.log(response.data);
      setMascotas(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    console.log('soy el useEffect' + name)
    fetchUser();
  }, [name]);

  const renderItem = ({ item }) => (
    <Text style={{color: 'red'}}>{item.name}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={mascotas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Text>hola tengo {mascotas.length} mascotas</Text>
        <StatusBar style="auto" />
        <Mascotas />
      </View>
    </SafeAreaView>
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