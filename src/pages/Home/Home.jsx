import { Link, useNavigate } from "react-router-dom";
import style from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  const [apiUsers, setApiUsers] = useState([]);

  const [loginError, setLoginError] = useState(false);

  const checkUserInApi = (user, apiUsers) => {
    setLoginError(false);
    if (user.user === "" && user.password === "") {
      setLoginError(true);
      return false;
    }
    for (const apiUser of apiUsers) {
      if (apiUser.user === user.user) {
        if (apiUser.password === user.password) {
          setLoginError(false);
          return navigate("/movies");
        }
      }
    }
    setLoginError(true);
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(apiUsers);
    console.log(checkUserInApi(user, apiUsers));
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const config = {
          headers: {
            apiKey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhemxmc3h4bmJ2Y3VwcXRxcXhmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Njg2MDU1MywiZXhwIjoyMDEyNDM2NTUzfQ.g-AmyyofnSMuew141w9ZM_TgpX23-tAKctFPOuoameI",
          },
        };
        const response = await axios.get(
          "https://qazlfsxxnbvcupqtqqxf.supabase.co/rest/v1/ctj_autorizacao?select=*",
          config
        );
        setApiUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title has-text-light	">Tech Challenge - FIAP</h1>
        <h2 className="subtitle has-text-light	">Login</h2>
        <section className="section">
          <form className={style.form} onSubmit={handleSubmit}>
            <div className="field">
              <label className="label has-text-light">Usuário</label>
              <input
                className={`input ${loginError ? "is-danger" : ""}`}
                type="text"
                placeholder="example@email.com"
                onChange={(event) => {
                  setUser({ ...user, user: event.target.value });
                }}
              />
            </div>
            <div className="field">
              <label className="label has-text-light">Senha</label>
              <input
                className={`input ${loginError ? "is-danger" : ""}`}
                type="password"
                onChange={(event) => {
                  setUser({ ...user, password: event.target.value });
                }}
              />
            </div>
            {loginError && (
              <div className="field">
                <p className="help is-danger has-text-weight-bold">Usuário não encontrado!</p>
              </div>
            )}
            <button className="button is-primary has-text-weight-bold">Login</button>
          </form>
        </section>
        <div className="section">
          <h2 className="subtitle has-text-light">Não possuí cadastro?</h2>
          <Link className="button is-link has-text-weight-bold" to={"/register"}>
            Registre-se
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
