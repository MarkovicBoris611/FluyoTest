import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
interface FeedbackProps {
    isCorrect: boolean;
    correctAnswer: string;
    onContinue: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({ isCorrect, correctAnswer, onContinue }) => {
    return (
        <View style={[styles.container, {
            backgroundColor: isCorrect ? '#1AE3E8' : '#FE7A87'
        }]}>
            <Text style={styles.text}>{isCorrect ? 'Great Job' : `Answer: ${correctAnswer}`}</Text>
            <TouchableOpacity style={isCorrect ? styles.button_correct : styles.button_wrong} activeOpacity={0.7} onPress={onContinue}>
                <Text style={[styles.buttonText, { color: isCorrect ? '#1AE3E8' : '#FE7A87' }]}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        maxHeight: 250,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
        flex: 1,
        position: 'absolute',
        bottom: 0,
        zIndex: 100
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    button_correct: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 40,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button_wrong: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 40,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    space: {
        flex: 1
    },
    buttonText: {
        fontWeight: '700',
        textAlign: 'center'
    }
})

export default Feedback