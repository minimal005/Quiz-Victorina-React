import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    //якщо невизначений, то відбудеться одноразова перетасовка відповідей
    shuffledAnswers.current = [...answers]; //створюємо новий масив, щоб в ньому перетасувати відповіді
    shuffledAnswers.current.sort(() => Math.random() - 0.5); //перетасовуємо відповіді, оскільки в оригінальному масиві перший варіант завжди вірний
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer; // остання введена відповідь
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
