import { StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function App() {
  const [mascotas, setMascotas] = useState([]);
    
  useEffect(() => {
        (async function(){
   /*        fetch('http://192.168.0.6;/api/Mascotas')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });*/
      const respuesta = await axios.get('http://localhost:65443/api/Mascotas');
       setMascotas(respuesta.data)
        
      })();
    },[]);
    
    console.log(mascotas)
    
    const Item = ({ title, title2, title3 }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{title2}</Text>
        <Text style={styles.title}>{title3}</Text>
      </View>
    );
    const listedemascote = mascotas.map(mascota =>{
      return(

      <Item 
        title={mascota.Nombre }
        title2={mascota.Edad } 
        title3={mascota.Estado }
        keyExtractor={mascota=>mascota.idMascota}/>
        )}
    );



  return (
    <>
      {listedemascote}
    </>
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
