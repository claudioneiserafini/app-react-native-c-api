import React, { useState } from 'react';
import { Button, TextInput, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from "../UserCreate/styles";
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createUser } from '../../Services/UserService';


const UserCreate = ({ navigation, route }) => {
    const [user, setUser] = useState(route.params ? route.params : {});

    const saveUser = () => {
        const data = {
            title: user.title,
            albumId: user.albumId,
            url: user.url,
            thumbnailUrl: user.thumbnailUrl,
        };

        createUser(data).then(response => {
            setUser(response.data);
            console.log(response.data);
            navigation.navigate('UserList');
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
               <Title style={styles.title}>Inserir Produto</Title>

                <ScrollView style={styles.containerInput}>
                <TextInput
                        label="Title"
                        value = {user.title}
                        onChangeText={title => setUser({...user, title})}
                        style={styles.input}
                    />
                    <TextInput
                        label="albumId"
                        value = {user.albumId}
                        onChangeText={albumId => setUser({...user, albumId})}
                        style={styles.input}
                    />
                    <TextInput
                        label="Url"
                        value = {user.url}
                        onChangeText={url => setUser({...user, url})}
                        style={styles.input}
                    />
                    <TextInput
                        label="thumbnailUrl"
                        onChangeText={thumbnailUrl => setUser({...user, thumbnailUrl})}
                        value = {user.thumbnailUrl}
                        style={styles.input}
                    />
                    
                </ScrollView>
            
                <View style={styles.containerButton}>
                    <Button mode="contained" style={styles.buttonConfirm} onPress={saveUser}>
                        Cadastrar
                    </Button>
                    <Button mode="contained" style={styles.buttonCancel} onPress={() => navigation.navigate('UserList')}>
                        Cancelar
                    </Button>
                </View>
            </SafeAreaView>
        </>
    );
};

export default UserCreate;