import { useEffect } from "react";
import Headers from "./components/Header";
import Main from "./Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { useReducer } from "react";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import questionData from "./data/questions.json";
const secQuestion = 30;

// init state
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondRemaining: null,
};

// reducer function to handel data
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payLoad,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * secQuestion,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payLoad,
        points:
          action.payLoad === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "newQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 1 ? "finished" : state.status,
      };
    default:
      throw new Error("Actions unknown");
  }
}

export default function App() {
  // Use Reducer To Store Data
  const [
    { status, questions, index, answer, points, highscore, secondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Questions Length
  const numQuestions = questions.length;

  // Max Points
  const maxPossiblePoints = questions.reduce(
    (acc, curr) => acc + curr.points,
    0
  );

  // Fetch Data To handel Questions
  useEffect(() => {
    // return data From Promise
    let myPromise = new Promise((res, rej) => {
      let myData = true;
      if (myData) {
        res(questionData.questions);
      } else {
        rej("No Response");
      }
    });
    myPromise
      .then((data) => dispatch({ type: "dataReceived", payLoad: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
    // fetch(`http://localhost:8000/questions`)
    //   .then((res) => res.json())
    //   .then((data) => dispatch({ type: "dataReceived", payLoad: data }))
    //   .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Headers />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
