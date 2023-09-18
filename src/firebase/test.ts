import firestore from '@react-native-firebase/firestore';

export interface QuestionInterface {
    en: string;
    de: string;
    ques: {
        en_index: number;
        de_index: number;
        words: string[];
    };
}

export const fetchRandomQuestion = async () => {
    const querySnapshot = await firestore().collection('questions').get();
    const totalQuestions = querySnapshot.size;
    const randomIndex = Math.floor(Math.random() * totalQuestions);
    const randomQuestion = querySnapshot.docs[randomIndex]?.data();
    return randomQuestion as QuestionInterface
}
