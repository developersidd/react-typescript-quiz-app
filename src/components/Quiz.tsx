import { useState } from "react";
import QuizInput from "./QuizInput";
import { useQuizContext } from "../context/QuizContext";

const Quiz = () => {
  const [quizNumber, setQuizNumber] = useState<number>(0);
  const { quizzes } = useQuizContext();

  console.log("quizzes", quizzes);

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="md:w-4/5 lg:w-2/4 text-center font-bold p-4 rounded-md bg-[#ECFDFF] shadow-md">
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
          disabled={quizNumber >= quizzes.length - 1}
          className="mt-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-12 py-3 font-bold rounded"
          onClick={() => setQuizNumber((prevState) => prevState + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
