import { Link } from "react-router-dom";
import style from "./home.module.css";

function Home() {
  return (
    <main className={style.container}>
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Cadastre-se</button>
      </form>
      <div className="registerContainer">
        <Link to={"/register"}>Registre-se</Link>
      </div>
    </main>
  );
}

export default Home;
