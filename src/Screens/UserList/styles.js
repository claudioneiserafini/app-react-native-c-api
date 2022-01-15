import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginVertical: 7,
        marginLeft: 20,
    },
    fab: {
        position: 'absolute',
        marginRight: 25,
        marginBottom: 25,
        right: 0,
        bottom: 0,
        borderRadius: 15,
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