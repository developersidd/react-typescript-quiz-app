import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useQuizContext } from "../context/QuizContext";
import QuizInput from "./QuizInput";

const Quiz = () => {
  const [quizNumber, setQuizNumber] = useState<number>(0);
  const { quizzes } = useQuizContext();
  const [quizMark, setQuizMark] = useState(0);
  const [isSubmittted, setIsSubmittted] = useState(false);

  useEffect(() => {
    if (isSubmittted) {
      Swal.fire({ title: quizMark <= ((quizzes.length * 5) / 2) ? "AWESOME" : "EXTRAORDINARY", icon: quizMark === 0 ? "error" : "success", text: `Your Score is: ${quizMark}` })
    }
  }, [isSubmittted])

  const calculateQuizMark = (): void => {
    quizzes.map(quiz => {
      if (quiz.isPassed) {
        setQuizMark((prevMark) => prevMark + 5);
      }
    });
    setIsSubmittted(true);
  }

  const handleNextQuiz = () => {
    if (quizzes[quizNumber].isPassed !== null) {
      setQuizNumber((prevState) => prevState + 1)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="md:w-4/5 lg:w-2/4 text-center font-bold p-4 rounded-md bg-[#ECFDFF] shadow-md">

        {
          isSubmittted && (
            <h1>Your Score: {quizMark} / {quizzes.length * 5}  </h1>
          )
        }

        <h1 className="my-3 text-lg">
          {" "}
          Question: {quizzes[quizNumber].id}/{quizzes.length}{" "}
        </h1>
        <h4 className="mb-3 text-xl"> {quizzes[quizNumber].title} </h4>
        {quizzes[quizNumber]?.options.map((option) => (
          <QuizInput
            key={option.id}
            quizNumber={quizzes[quizNumber].id}
            optionId={option.id}
            value={option.value}
            isCorrect={option.isCorrect}
            selected={option.selected}
            isPassed={quizzes[quizNumber].isPassed}
            targetedQuiz={quizzes[quizNumber]}
          />
        ))}

      </div>

      <div className="flex justify-between w-full">
        <button
          disabled={quizNumber === 0}
          className="mt-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-12 py-3 font-bold rounded "
          onClick={() => setQuizNumber((prevState) => prevState - 1)}
        >
          Prev
        </button>

        <button
          disabled={(quizzes.length - 1 === quizNumber && isSubmittted) || quizzes[quizNumber].isPassed === null}
          className="mt-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-12 py-3 font-bold rounded"
          onClick={() => quizzes.length - 1 === quizNumber ? calculateQuizMark() : handleNextQuiz()}
        >
          {quizzes.length - 1 === quizNumber ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
