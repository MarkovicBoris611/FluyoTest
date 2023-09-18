import React from 'react'
import { StyleSheet, View } from 'react-native'
import Word, {WordInterface} from './Word';

export interface WordBlockProps {
    contents: WordInterface[];
    setSelectedAnswer?: (value: string) => void;
}

const WordBlock: React.FC<WordBlockProps> = ({ contents, setSelectedAnswer }) => {

    return (
        <View style={styles.container}>
            {contents.map((content: WordInterface, index: number) => {
                return <Word type={content.type} text={content.text} setSelectedAnswer={setSelectedAnswer} key={`word_${content.text}-${content.type}-${index}`}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
});

export default WordBlock