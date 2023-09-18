import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: { backgroundColor: '#75DAFE', flex: 1 },
    container: {
        backgroundColor: '#3C6C82',
        flex: 1,
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    title_text: {
        color: 'white',
        textAlign: 'center',
        marginTop: 50
    },
    actionButtonContainer: {
        justifyContent: 'flex-end',
        flex: 1
    }
})

export default styles