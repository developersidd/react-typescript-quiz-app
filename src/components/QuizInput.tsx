import { useQuizContext } from "../context/QuizContext";
import { IQuiz } from "../data/quizData";

type QuizInputProps = {
  optionId: number;
  value: string;
  isCorrect: boolean;
  selected: boolean;
  quizNumber: number;
  isPassed: null | boolean;
  targetedQuiz: IQuiz
};

const successStyle = "from-green-400 to-green-500";
const failStyle = "from-red-500 to-red-700";

const QuizInput = (props: QuizInputProps) => {
  const { optionId, selected, value, quizNumber, isCorrect, isPassed, targetedQuiz } = props
  const { toggleQuizOption } = useQuizContext();

  const handleQuizSubmit = () => {
    toggleQuizOption(quizNumber, optionId);
  };

  const buttonClass = `${isPassed === null
    ? ""
    : isPassed === true && isCorrect
      ? successStyle
      : selected && failStyle
    } ${isPassed !== null && isCorrect && successStyle}`;

  //console.log("buttonClass:", buttonClass)

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
