import { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";

type QuizInputProps = {
  optionId: number;
  value: string;
  isCorrect: boolean;
  selected: boolean;
  quizNumber: number;
  isPassed: null | boolean;
};

const successStyle = "from-green-400 to-green-500 bg-red-700";
const failStyle = "from-red-500 to-red-700";

const QuizInput = ({
  optionId,
  selected,
  value,
  quizNumber,
  isCorrect,
  isPassed,
}: QuizInputProps) => {
  const { toggleQuizOption } = useQuizContext();

  const handleQuizSubmit = () => {
    toggleQuizOption(quizNumber, optionId);
  };

  const buttonClass = `${
    isPassed === null
      ? ""
      : isPassed === true && isCorrect
      ? successStyle
      : selected && failStyle
  } ${isPassed !== null && isCorrect && !isPassed && successStyle}`;
  
  console.log("buttonClass:", buttonClass)

  return (
    <button
      onClick={handleQuizSubmit}
      id={`option-${optionId}`}
      disabled={isPassed !== null}
      className={`${buttonClass} shadow-md border-4 border-white rounded block px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-extrabold text-white mb-4 w-full`}
    >
      {value}
    </button>
  );
};

export default QuizInput;
