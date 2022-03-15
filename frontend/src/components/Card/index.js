import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import S from "./styles.css";
import { fetchFlashcards } from "../../services";

const Card = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [word, setWord] = useState({});
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [reveal, setReveal] = useState(false);

  const restart = () => {
    setWord({});
    setTurn(1);
    setScore(0);
    setShowScore(false);
    setReveal(false);
    newWord();
  };

  const nextTurn = (point) => {
    setScore((prev) => prev + point);
    setTurn((prev) => prev + 1);
    setReveal(false);
    setTimeout(() => {
      newWord(turn);
    }, 500);
  };

  const newWord = (turn = 0) => {
    if (!!flashcards.length) {
      while (turn < flashcards.length) {
        setWord(flashcards[turn]);
        return;
      }
      setShowScore(true);
    }
  };

  const fetch = async () => {
    setFlashcards(await fetchFlashcards());
  };

  const toggleReveal = () => setReveal(!reveal);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    newWord();
  }, [flashcards]);

  return (
    <section class={S.sectionplans} id="sectionplans">
      {!showScore && (
        <>
          <div class={`${S.card}`} onClick={toggleReveal}>
            <div
              class={`${S.card__side} ${S.card__sidefront}`}
              style={{ transform: reveal ? "rotateY(-180deg)" : "rotateY(0)" }}
            >
              <div class={`${S.card__title}`}>
                <h4 class={S.card__heading}>{word.origin_word}</h4>
              </div>
            </div>
            <div
              class={`${S.card__side} ${S.card__sideback}`}
              style={{ transform: reveal ? "rotateY(0)" : "rotateY(180deg)" }}
            >
              <div class={S.card__cta}>
                <h4 class={S.card__heading}>{word.target_word}</h4>
              </div>
            </div>
          </div>

          <div class={`${S.btn__wrapper} ${reveal ? S.reveal : S.hide}`}>
            <a onClick={() => nextTurn(1)} class={`${S.btn} ${S.like__btn}`}>
              I got it!
            </a>
            <a onClick={() => nextTurn(0)} class={`${S.btn} ${S.dislike__btn}`}>
              Missed
            </a>
          </div>

          <a onClick={toggleReveal} class={`${S.btn} ${S.reveal__btn}`}>
            {reveal ? "Original" : "Reveal"}
          </a>
        </>
      )}
      {showScore && (
        <>
          <h2>
            You remebered {(score / flashcards.length) * 100}% of the words!
          </h2>
          <a onClick={restart} class={`${S.btn} ${S.reveal__btn}`}>
            Start again
          </a>
        </>
      )}
    </section>
  );
};

export default Card;
