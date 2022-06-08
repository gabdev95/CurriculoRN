import React from 'react';
import {View, Text, Image, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import foto from './assets/foto.png';
import github_icon from './assets/github_icon.png';
import linkedin_icon from './assets/linkedin_icon.png';
import gmail_icon from './assets/gmail_icon.png';

import Card from './components/Card/Index';

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social) {
      case 'github_icon':
        Alert.alert('Meu GitHub','https://github.com/gabdev95')
      break
      case 'linkedin_icon':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/dev-gabriele-de-medeiros/')
      break
      case 'gmail_icon':
        Alert.alert('Meu E-mail','gabriele.mdemedeiros@gmail.com')
      break
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.containerCabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Gabriele de Medeiros</Text>
          <Text style={style.funcao}>Desenvolvedora Mobile</Text>
          <View style={style.redes}>
            <TouchableOpacity onPress={() => handleRedeSocial('github_icon')}>
              <Image source={github_icon} style={style.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin_icon')}>
              <Image source={linkedin_icon} style={style.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('gmail_icon')}>
              <Image source={gmail_icon} style={style.icons} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo='Experiência Profissional'>
          <Text style={style.txt_card_content}>HTML</Text>
          <Text style={style.txt_card_content}>CSS</Text>
          <Text style={style.txt_card_content}>JavaScript</Text>
          <Text style={style.txt_card_content}>React Native</Text>
        </Card>
        <Card titulo='Formação Acadêmica'>
          <Text style={style.txt_card_content}>Sistemas de Informação</Text>
        </Card>

      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',
  },
  containerCabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  foto: {
    height: 250,
    width: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  icons: {
    height: 25,
    width: 25,
  },
  redes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 15,
  },
  txt_card_content: {
    color: '#939393',
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
})

export default App;