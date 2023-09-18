import React, { useState, useEffect, useCallback } from 'react'
import { Text, View } from 'react-native'
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ActionButton from '../../components/common/ActionButton';
import Feedback from '../../components/Test/Feedback';
import QuestionContent from '../../components/Test/QuestionContent';
import styles from './styles';
import { QuestionInterface, fetchRandomQuestion } from '../../firebase/test';


const TestScreen: React.FC = () => {

    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [isChecking, setIsChecking] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<QuestionInterface>();
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        setIsLoading(true);
        try {
            const randomQuestion = await fetchRandomQuestion()
            setSelectedAnswer('');
            setIsCorrect(false);
            setIsChecking(false);
            setCurrentQuestion(randomQuestion);

        } catch (error) {
            console.error("Error fetching random question: ", error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const checkAnswer = useCallback(() => {
        if (currentQuestion) {
            setIsChecking(true)
            setIsCorrect(currentQuestion.ques.words[currentQuestion.ques.de_index] == selectedAnswer);
        }
    }, [currentQuestion, selectedAnswer])

    return (
        <View style={styles.appContainer}>
            <View style={styles.container}>
                {isLoading ? <LoadingIndicator text='Getting Next Question...' /> : (
                    currentQuestion && (
                        <>
                            <Text style={styles.title_text}>{'Fill the missing word'}</Text>
                            <QuestionContent question={currentQuestion} selectedAnswer={selectedAnswer} isChecking={isChecking} setSelectedAnswer={setSelectedAnswer} />

                            {isChecking &&
                                <Feedback isCorrect={isCorrect} correctAnswer={currentQuestion.ques.words[currentQuestion.ques.de_index]} onContinue={getData} />
                            }
                            <View style={styles.actionButtonContainer}>
                                {selectedAnswer && <ActionButton label="CHECK ANSWER" onPress={() => checkAnswer()} />}
                                {!selectedAnswer && <ActionButton label="CONTINUE" disabled onPress={() => { }} />}
                            </View>

                        </>
                    )
                )}
            </View>
        </View>
    );
}

export default TestScreen