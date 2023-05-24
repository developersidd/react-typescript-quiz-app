import { ReactNode, createContext, useContext, useState } from "react";
import { IQuiz, data } from "../data/quizData";

type QuizContext = {
    toggleQuizOption: (quizNumber: number, optionNumber: number) => void;
    quizzes: IQuiz[];
}

type QuizContextProviderProps = {
    children: ReactNode
}

export const useQuizContext = () => {
    return useContext(QuizContext)
}

export const QuizContext = createContext({} as QuizContext);
export const QuizContextProvider = ({ children }: QuizContextProviderProps) => {
    const [quizzes, setQuizzes] = useState<IQuiz[]>(data);
    //console.log("quizzes:", quizzes)

    const toggleQuizOption = (quizNumber: number, optionNumber: number) => {
        setQuizzes(prevQuizzes => {

            return prevQuizzes.map(quiz => {
                if (quiz.id === quizNumber) {

                    const modifiedOptions = quiz.options.map(option => {
                        if (option.id === optionNumber) {
                            return { ...option, selected: !option.selected};
                        } else {
                            return option
                        }
                    });
                    return { ...quiz, options: modifiedOptions };
                } else {
                    return quiz
                }
            })
        });
    }
    return <QuizContext.Provider value={{ toggleQuizOption, quizzes }}>
        {children}
    </QuizContext.Provider>
}
