import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { deleteUser } from '../../Services/UserService'
import { Button,} from 'react-native-paper';


import styles from './styles';

const UserShow = ({ route, navigation }) => {
  const { data } = route.params;
  
  const [user, setUser] = useState(data);

  /*useEffect(() => {
    console.log("CHAMOU O USEEFFECT!");
    getUser(id).then(response => {
      setIsLoading(false);
      setUser(response.data);
      //console.log(response.data);
    }).catch(console.error);
    //console.log(user);

  }, []) // SOMENTE NO PRIMEIRO RENDER*/

  function remove() {
    deleteUser(data.id).then(response => {
        console.log(response.data);
        navigation.navigate('UserList');
    }).catch(console.error);
};

  return (
    <>
      <View>
        
        <SafeAreaView>
          {user &&
            <View style={styles.containerDataUser}>
              <ImageBackground source={{ uri: `${data.thumbnailUrl}` }} style={styles.url}></ImageBackground>
              <Text style={styles.title}>ID: {user?.id}</Text>
              <Text style={styles.title}>{user?.title}</Text>
            </View>
          }

          <View style={styles.containerButton}>
              <Button mode="contained" style={styles.buttonEdit} onPress={() => navigation.navigate('UserEdit', {data: data})}>
                  Editar
              </Button>
              
              <Button mode="contained" style={styles.buttonDelete} onPress={() => remove()}>
                  Deletar
              </Button>
          </View>

        </SafeAreaView>
      </View>


    </>
  );
};



export default UserShow;








