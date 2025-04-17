export function Question({ question, onAddToMain }) {
  function handleClick() {
    const dataOnScreen = question.title ? question.title : question;
    console.log(question);
    onAddToMain(<p>{<Answer answerData={question} />}</p>);
  }

  return (
    <li className="pl-4 hover:cursor-pointer hover:underline">
      <p onClick={handleClick}>{question.title ? question.title : question}</p>
    </li>
  );
}

function Answer({ answerData }) {
  return (
    <div class="concept">
      <h2>{answerData.title}</h2>
      <p>{answerData.description}</p>
      <pre>{answerData.code}</pre>
      <div class="tips">
        {answerData.tips.map((tip) => (
          <p>💡 {tip}</p>
        ))}
      </div>
      <div class="warnings">
        {answerData.warnings.map((warn) => (
          <p>⚠️ {warn}</p>
        ))}
      </div>
    </div>
  );
}
