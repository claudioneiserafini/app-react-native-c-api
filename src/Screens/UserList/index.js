import React, { useEffect, useState } from 'react';

import {
  FlatList,
  View,
} from 'react-native';

import { ActivityIndicator, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserItem from '../../Components/UserItem';
import { getUsers } from '../../Services/UserService';

import styles from './styles';

const UserList = ({navigation}) => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("CHAMOU O USEEFFECT!");
    getUsers().then(response => {      
        setIsLoading(false);
        setUsers(response?.data);
    }).catch(console.error);


  }, []) // SOMENTE NO PRIMEIRO RENDER

  return (
    <>
     <View style={styles.containerButton}>
        <Button mode="contained" style={styles.buttonConfirm} onPress={() => navigation.navigate('UserCreate')}>
            Criar Objeto
        </Button>
        
      </View>

      <View style={(isLoading) ? styles.isLoadingContainer : null}>
        
        <SafeAreaView>
    
          <FlatList
            data={users}
            renderItem={({ item }) => <UserItem data={item} />}
          />

        </SafeAreaView>
      </View>
      {isLoading && <ActivityIndicator style={styles.activityIndicator} animating={isLoading} /> }

    </>
  );
};

export default UserList;
