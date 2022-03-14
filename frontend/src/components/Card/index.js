import { h } from "preact";
import { useState } from "preact/hooks";
import S from "./styles.css";

const Card = () => {
  const [reveal, setReveal] = useState(false);

  const toggleReveal = () => setReveal(!reveal);

  return (
    <section class={S.sectionplans} id="sectionplans">
      <div class={`${S.card}`} onClick={toggleReveal}>
        <div
          class={`${S.card__side} ${S.card__sidefront}`}
          style={{ transform: reveal ? "rotateY(-180deg)" : "rotateY(0)" }}
        >
          <div class={`${S.card__title}`}>
            <h4 class={S.card__heading}>Batatinha</h4>
          </div>
        </div>
        <div
          class={`${S.card__side} ${S.card__sideback}`}
          style={{ transform: reveal ? "rotateY(0)" : "rotateY(180deg)" }}
        >
          <div class={S.card__cta}>
            <h4 class={S.card__heading}>Batatinha</h4>
          </div>
        </div>
      </div>

      <div class={`${S.btn__wrapper} ${reveal ? S.reveal : S.hide}`}>
        <a onClick={toggleReveal} class={`${S.btn} ${S.like__btn}`}>
          I got it!
        </a>
        <a onClick={toggleReveal} class={`${S.btn} ${S.dislike__btn}`}>
          Missed
        </a>
      </div>

      <a onClick={toggleReveal} class={`${S.btn} ${S.reveal__btn}`}>
        {reveal ? "Original" : "Reveal"}
      </a>
    </section>
  );
};

export default Card;
