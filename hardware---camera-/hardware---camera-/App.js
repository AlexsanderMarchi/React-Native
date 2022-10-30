import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Pressable, Text, View, Image, StyleSheet } from 'react-native';

export default function App() {
  const [foto, setFoto] = useState(null);

  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  return (
    <View style={styles.botao}>
      {foto && <Image style={styles.imagem} source={{ uri: foto }} />}
      <Pressable title="Escolha uma foto" onPress={escolherImagem}>
        <Text>Ola</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 70,
  },
  imagem:{
    width:400,
    height: 300
  }
});
