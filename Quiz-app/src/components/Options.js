export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <>
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={i}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payLoad: i })}>
          {option}
        </button>
      ))}
    </>
  );
}
