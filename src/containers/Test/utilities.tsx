import { WordType, WordInterface } from '../../components/Test/Word';
import { QuestionInterface } from '../../firebase/test';
export const getBlocks = (question: QuestionInterface, selectedAnswer: string, isChecking: boolean): { enTextBlocks: WordInterface[], deTextBlocks: WordInterface[], quesBlocks: WordInterface[] } => {

    const determineEnType = (index: number): WordType => {
        return index !== question.ques.en_index ? WordType.NORMAL_EN : WordType.LINE_EN;
    };

    const determineDeType = (index: number, item: string): WordType => {
        if (index !== question.ques.de_index) return WordType.NORMAL_DE;
        if (selectedAnswer === '') return WordType.LINE_DE;
        if (!isChecking) return WordType.BUTTON_NORMAL;
        return selectedAnswer === item ? WordType.BUTTON_CORRECT : WordType.BUTTON_FAIL;
    };

    const determineQuesType = (item: string): WordType => {
        return selectedAnswer === item ? WordType.BUTTON_DISABLE : isChecking ? WordType.BUTTON_NORMAL_DISABLE : WordType.BUTTON_NORMAL;
    };

    const enTextBlocks: WordInterface[] = question.en.split(' ').map((item, index) => ({
        text: item,
        type: determineEnType(index)
    }));

    const deTextBlocks: WordInterface[] = question.de.split(' ').map((item, index) => ({
        text: selectedAnswer !== '' ? (index == question.ques.de_index) ? selectedAnswer : item : item,
        type: determineDeType(index, item)
    }));

    const quesBlocks: WordInterface[] = question.ques.words.map((item) => ({
        text: item,
        type: determineQuesType(item)
    }));

    return { enTextBlocks, deTextBlocks, quesBlocks };
} 