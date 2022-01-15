import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';

const Welcome = ({navigation}) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("Anônimo");

    const updateName = (value) => {
        value = value.trim();
        setName(value);
        
    }

    const updateLastName = (value) => {
        value = value.trim();
        setLastName(value);        
    }

    useEffect(() => {
        if (!name && !lastName) {
            setSubject('Anônimo');
        } else {
            setSubject(`${name} ${lastName}`)
        }
    })

    return (
        <>
            <View style={styles.container}>
                <Text>Nome:</Text>
                <TextInput style={styles.input} onChangeText={ updateName } />

                <Text>Sobrenome:</Text>
                <TextInput style={styles.input} onChangeText={ updateLastName }/>

                <Text style={styles.greeting} >Olá, {subject}</Text>

                <Button mode="contained" onPress={() => navigation.navigate('UserList')}>
                    Contador
                </Button>
            </View>
        </>
    )

}

export default Welcome;