import { h } from "preact";
import S from "./styles.css";
import Card from "../../components/Card";

const Home = () => (
  <section style="padding-top: 50px">
    <div class={S.ucentertext}>
      <h2 class={S.headingsecondary}>What this word means?</h2>
      <Card />
    </div>
  </section>
);

export default Home;
