import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>hola</Text>
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



  axios({
      method: 'get',
      url: `https://www.Api/Refugios.com`,
      params: {
          
      id: idRefugio,
  
      }
  }).then(response => {
  


      response.data.Search.forEach(info => {

      

      });
  })

