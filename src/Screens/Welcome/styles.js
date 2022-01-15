import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 150,
        width: '100%',
        height: 120, //Tamanho da imagem
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: 125,
    },

    input: {
        marginTop: 10,
        width: 300,
        height: 25,
        backgroundColor: '#AFA1FF',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 10,
        padding: 10,
    },

    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#6200EE',
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;