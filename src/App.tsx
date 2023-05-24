import Quiz from "./components/Quiz";
import { QuizContextProvider } from "./context/QuizContext";

function App() {
  return (
    <QuizContextProvider>
      <div className="p-10">
        <h1 className="text-4xl font-extrabold text-center text-[#015063]"> REACT QUIZ </h1>
        <Quiz />
      </div>
    </QuizContextProvider>
  )
}

export default App
