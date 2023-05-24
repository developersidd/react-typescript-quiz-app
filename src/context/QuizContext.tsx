import { ReactNode, createContext, useContext, useState } from "react";
import { IQuiz, data } from "../data/quizData";

type QuizContext = {
  toggleQuizOption: (quizNumber: number, optionNumber: number) => void;
  quizzes: IQuiz[];
};

type QuizContextProviderProps = {
  children: ReactNode;
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};

export const QuizContext = createContext({} as QuizContext);
export const QuizContextProvider = ({ children }: QuizContextProviderProps) => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>(data);

  const toggleQuizOption = (quizNumber: number, optionNumber: number) => {
    console.log("quizNumber", quizNumber, "optionNumber", optionNumber);
    setQuizzes((prevQuizzes) => {
      return prevQuizzes.map((quiz) => {
        console.log("quiz:", quiz, quizNumber);
        if (quiz.id === quizNumber) {
          const updatedOptions = quiz.options.map((option) => {
            if (option.id === optionNumber) {
              return { ...option, selected: true };
            }
            return option;
          });

          return {
            ...quiz,
            isPassed: quiz.options[optionNumber - 1].isCorrect,
            options: updatedOptions,
          };
        }
        return quiz;
      });
    });
  };

  return (
    <QuizContext.Provider value={{ toggleQuizOption, quizzes }}>
      {children}
    </QuizContext.Provider>
  );
};
