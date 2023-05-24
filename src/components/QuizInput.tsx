import { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";

type QuizInputProps = {
  id: number,
  value: string,
  isCorrect: boolean,
  selected: boolean,
  quizNumber: number,
  status: string
}
const QuizInput = ({ id, selected, value, quizNumber, isCorrect, status }: QuizInputProps) => {

  const [success, setSuccess] = useState(false);
  const [wrong, setWrong] = useState(false);
  const { toggleQuizOption, quizzes } = useQuizContext();

  const handleQuizSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const optionId: string = e.currentTarget.id.split("-")[1];
    const idNumber: number = parseInt(optionId);
    toggleQuizOption(quizNumber, id);
  }

  return (
    <button onClick={handleQuizSubmit} id={`option-${id}`} className={` ${wrong && "from-red-500 to-red-700"} ${success && "from-green-400 to-green-500 bg-red-700"} shadow-md border-4 border-white rounded block px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-extrabold text-white mb-4 w-full`}>
      {value}
    </button>
  )
}

export default QuizInput;