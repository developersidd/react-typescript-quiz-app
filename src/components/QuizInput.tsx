type QuizInputProps = {
  id: number,
  value: string,
  isCorrect: boolean,
  selected: boolean,
  quizNumber: number,
}
const QuizInput = ({ id, selected, value, quizNumber, isCorrect }: QuizInputProps) => {
  return (
    <button  className="shadow-md border-4 border-white rounded block px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-extrabold text-white mb-4 w-full">
      {value}
    </button>
  )
}

export default QuizInput;