import React, { useEffect, useState } from 'react';
import { Button, TextInput, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../UserEdit/styles";
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {getUser, updateUser} from '../../Services/UserService';

const UserEdit = ({ navigation, route }) => {
    const { data } = route.params;
    const [user, setUser] = useState(data);

    useEffect(() => {
        console.log(data.id)
        getUser(data.id).then(response => {
            setUser(response.data);
            //console.log(response.data);
        }).catch(console.error);
    }, [])

    const saveUser = () => {
        const data = {  
            title: user.title,
            url: user.url,
            thumbnailUrl: user.thumbnailUrl,
        };

        updateUser(user.id, data).then(response => {
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
            <SafeAreaView>
        
                <Title style={styles.title}>Editar Produto</Title>
                
                <ScrollView style={styles.containerInput}>
                
                    <TextInput
                        label="Title"
                        value = {user.title}
                        onChangeText={title => setUser({...user, title})}
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
                        Confirmar
                    </Button>
                    <Button mode="contained" style={styles.buttonCancel} onPress={() => navigation.navigate('UserList')}>
                        Cancelar
                    </Button>
                </View>
            </SafeAreaView>
            
        </>
    );
};

export default UserEdit;