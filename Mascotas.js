import React from 'react'
import { Text, View } from 'react-native';

const Mascotas = () => {
    const [mascotas, setMascotas] = useState();
    
    useEffect(() => {
        (async function(){
        const respuesta = await axios.get(`https://www.Api/Refugios/${idRefugio}`);
        setMascotas(respuesta.data);
        })();
    }, []);

    return (
        <View>
            {
                mascotas.map(mascota => (
                    <>
                        <Text>
                            { mascota.Edad }
                        </Text>
                        <Text>
                            { mascota.Vacunas }
                        </Text>
                        <Text>
                            { mascota.Raza }
                        </Text>
                    </>
                ))
            }
        </View>
    )
}

export default Mascotas