import { h } from "preact";
import { useState } from "preact/hooks";
import S from "./styles.css";

const Card = () => {
  const [flip, setFlip] = useState(false);

  return (
    <section class={S.sectionplans} id="sectionplans">
      <div class={`${S.card}`} onClick={() => setFlip(!flip)}>
        <div
          class={`${S.card__side} ${S.card__sidefront}`}
          style={{ transform: flip ? "rotateY(-180deg)" : "rotateY(0)" }}
        >
          <div class={`${S.card__title}`}>
            <h4 class={S.card__heading}>Batatinha</h4>
          </div>
        </div>
        <div
          class={`${S.card__side} ${S.card__sideback}`}
          style={{ transform: flip ? "rotateY(0)" : "rotateY(180deg)" }}
        >
          <div class={S.card__cta}>
            <h4 class={S.card__heading}>Batatinha</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
