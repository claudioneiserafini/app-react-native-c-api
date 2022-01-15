import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginVertical: 7,
        marginLeft: 20,
    },
    containerInput: {
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 40,
    },
    input: {
        marginBottom: 20,
    },
    containerButton: {
        position: 'absolute',
        bottom: 15,
        flexDirection: "row",
        //flexWrap: "wrap",
    },
    buttonConfirm: {
        width: '40%',
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: '#4169E1',
    },
    buttonCancel: {
        width: '40%',
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: '#D74B53',
    },
    buttonAdd: {
        width: '60%',
        marginRight: '20%',
        marginLeft: '20%',
        backgroundColor: '#4169E1',
    },
    divider: {
        marginVertical: 10,
    },
    subtitle: {
        marginBottom: 10,
        fontSize: 15,
    },
});

export default styles;