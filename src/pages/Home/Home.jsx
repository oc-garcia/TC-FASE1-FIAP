import { Link } from "react-router-dom";
import style from "./home.module.css";

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="title">Tech Challenge - FIAP</h1>
        <section className="section">
          <form className={style.form}>
            <div className="field">
              <label className="label">Username</label>
              <input className="input" type="text" placeholder="example@email.com" />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input className="input" type="password" />
            </div>
          </form>
        </section>
        <div className="section">
          <h2 className="subtitle">Não possuí cadastro?</h2>
          <Link className="button is-primary" to={"/register"}>
            Registre-se
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
