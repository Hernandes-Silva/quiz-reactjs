export type PostFinishQuiz = {
    questions: {
        question_id: number;
        user_answer: string;
    }[];
    category: string | undefined
};