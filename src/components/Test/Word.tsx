import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export enum WordType {
    NORMAL_EN = "normal_en",
    NORMAL_DE = "normal_de",
    LINE_EN = "line_en",
    LINE_DE = "line_de",
    BUTTON_NORMAL = "button_normal",
    BUTTON_NORMAL_DISABLE = "button_normal_disable",
    BUTTON_CORRECT = "button_correct",
    BUTTON_FAIL = "button_fail",
    BUTTON_DISABLE = "button_disable"
}
export interface WordInterface {
    text: String,
    type: WordType
}

export interface WordProps extends WordInterface {
    setSelectedAnswer?: (value: string) => void;
}

const Word: React.FC<WordProps> = ({ type, text, setSelectedAnswer }) => {

    let Component: React.ElementType = View;
    let componentProps = {};
    let style = styles.text_normal_en;

    switch (type) {
        case WordType.BUTTON_NORMAL:
            Component = TouchableOpacity;
            componentProps = {
                onPress: () => {
                    setSelectedAnswer && setSelectedAnswer(text.toString())
                },
                activeOpacity: 0.7
            };
            style = styles.text_button_normal;
            break;
        case WordType.BUTTON_NORMAL_DISABLE:
            style = styles.text_button_disable;
            break;
        case WordType.BUTTON_CORRECT:
            Component = TouchableOpacity;
            componentProps = { onPress: () => { }, activeOpacity: 0.7 };
            return (
                <Component {...componentProps} style={styles.container}>
                    <LinearGradient
                        colors={['#00DEEB', '#3EE9E9']}
                        style={styles.text_button_correct}
                    >
                        <Text style={styles.text_normal_en}>{text}</Text>
                    </LinearGradient>
                </Component>
            );
        case WordType.BUTTON_FAIL:
            Component = TouchableOpacity;
            componentProps = { onPress: () => { }, activeOpacity: 0.7 };
            return (
                <Component {...componentProps} style={styles.container}>
                    <LinearGradient
                        colors={['#FD7986', '#FF908C']}
                        style={styles.text_button_fail}
                    >
                        <Text style={styles.text_normal_en}>{text}</Text>
                    </LinearGradient>
                </Component>
            );
        case WordType.BUTTON_DISABLE:
            style = styles.text_button_chosen;
            break;
        case WordType.NORMAL_DE:
            style = styles.text_normal_de;
            break;
        case WordType.NORMAL_EN:
            style = styles.text_normal_en;
            break;
        case WordType.LINE_DE:
            style = styles.text_line_de;
            break;
        case WordType.LINE_EN:
            style = styles.text_line_en;
            break;
        default:
            break;
    }

    return (
        <Component {...componentProps} style={styles.container}>
            <Text style={style}>{text}</Text>
        </Component>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 10,
    },
    text_normal_en: {
        fontSize: 20,
        color: 'white'
    },
    text_normal_de: {
        fontSize: 20,
        color: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        paddingBottom: 1,
        borderStyle: 'dashed',
    },
    text_line_en: {
        fontSize: 20,
        color: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        paddingBottom: 1,
        fontWeight: '700'
    },
    text_line_de: {
        fontSize: 20,
        color: 'transparent',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        paddingBottom: 1,
        fontWeight: '700',
        minWidth: 50
    },
    text_button_normal: {
        fontSize: 20,
        color: '#35526A',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: '600',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text_button_correct: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'white',
        padding: 10,
        fontWeight: '600',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text_button_fail: {
        fontSize: 20,
        color: '#35526A',
        backgroundColor: 'white',
        padding: 10,
        fontWeight: '600',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text_button_chosen: {
        fontSize: 20,
        color: '#35526A00',
        backgroundColor: '#6392A6',
        padding: 10,
        fontWeight: '600',
        borderRadius: 16,
    },
    text_button_disable: {
        fontSize: 20,
        color: '#35526A88',
        backgroundColor: '#ddd',
        padding: 10,
        fontWeight: '600',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

export default Word;
