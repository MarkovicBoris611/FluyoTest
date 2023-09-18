import React from 'react'
import { getBlocks } from '../../containers/Test/utilities';
import WordBlock from './WordBlock'
import { QuestionInterface } from '../../firebase/test';

interface QuestionContentProps {
    question: QuestionInterface;
    selectedAnswer: string;
    isChecking: boolean;
    setSelectedAnswer: (answer: string) => void;
}

const QuestionContent: React.FC<QuestionContentProps> = ({ question, selectedAnswer, isChecking, setSelectedAnswer }) => {
    const blocks = getBlocks(question, selectedAnswer, isChecking);
    return (
        <>
            <WordBlock contents={blocks.enTextBlocks} />
            <WordBlock contents={blocks.deTextBlocks} />
            <WordBlock contents={blocks.quesBlocks} setSelectedAnswer={setSelectedAnswer} />
        </>
    )
}

export default QuestionContent