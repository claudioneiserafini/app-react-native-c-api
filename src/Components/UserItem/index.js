import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Text, TouchableHighlight, View, ScrollView, ImageBackground } from 'react-native';
import {List} from 'react-native-paper';

import styles from '../UserItem/styles';

const UserItem = ({ data }) => {

  const navigation = useNavigation();


  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <TouchableHighlight onPress={() => navigation.navigate('UserShow', { data: data})}>
          <List.Item
              title={<ImageBackground
              style={styles.tinyLogo}
              source={{ uri: `${data.url}` }}
            />}
              
            description={data.title}

            left={props => <Text {...props} style={styles.id}>{data.id}</Text>}
          />
        </TouchableHighlight>
        </ScrollView>
      </View>
    </>

  );

};

export default UserItem;