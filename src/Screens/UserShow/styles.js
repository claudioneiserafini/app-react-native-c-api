import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    url: {
        width: 150,
        height: 150,
    },
    
    title: { 
        marginVertical: 7,

        fontSize: 20,
        fontWeight: 'bold', 
        marginBottom: 10,
    },

    containerDataUser: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    
    containerButton: {
        paddingTop: 50,
        bottom: 15,
        flexDirection: "row",
        //flexWrap: "wrap",
    },
    
    buttonEdit: {
        width: '40%',
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: '#4169E1',
    },
    buttonDelete: {
        width: '40%',
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: '#D74B53',
    },
    invisible: {
        opacity: 0,
    },
    activityIndicator: {
        position: 'absolute',
        top: 0,
        left: 0,
        right:0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default styles;