import React from 'react';
import { Button, TextInput  } from 'react-native-paper';

import {
  Image,
  ScrollView,
  Text, View,
} from 'react-native';

import styles from './styles';

const Welcome = ({navigation}) => {
  
    
  return (
    <> 

      <View style={styles.container}>
      <ScrollView>
          <Image 
            source={require('./loginlogo.png')}
            style={styles.logo}
          />

          <TextInput
          placeholder='Digite seu email'
          style={styles.input}
          />

          <TextInput
          secureTextEntry={true}
          placeholder='Digite sua senha'
          style={styles.input}
          />

          <Button 
          mode="contained" 
          style={styles.botao} 
          onPress={() => navigation.navigate('UserList')}>
          <Text> Login </Text>
          </Button>
        </ScrollView>
        </View>
      
    </>
  );
};


export default Welcome;