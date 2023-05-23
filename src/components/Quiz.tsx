import { useState } from "react";
import { data } from "../data/quizData";
import QuizInput from "./QuizInput";

const Quiz = () => {
  const [quizNumber, setQuizNumber] = useState<number>(0);
  
  const handlePrevNext = () => {
  
    if(quizNumber >= data.length){
      setQuizNumber((prevState) => prevState - 1);
    } else{
      setQuizNumber((prevState) => prevState + 1);
    }

  }

    return (
    <div className="flex flex-col justify-center items-center mt-7">
      <div className="md:w-4/5 lg:w-2/4 text-center font-bold p-5 rounded-md bg-[#ECFDFF] shadow-md">
        <h1 className="my-4 text-xl"> Question: {data[quizNumber].id} / {data.length} </h1>
        <h4 className="mb-5 text-xl"> {data[quizNumber].title} </h4>
        {data[quizNumber]?.options.map(item => <QuizInput quizNumber={data[quizNumber].id} {...item} />)}
      </div>
      <button className="mt-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-12 py-3 font-bold rounded" onClick={handlePrevNext}> 
      {quizNumber >= data.length ? "Prev" : "Next" } </button>
    </div>
  )
}

export default Quiz;