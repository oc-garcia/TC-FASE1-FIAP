import { Link, useNavigate } from "react-router-dom";
import style from "./home.module.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { config, getUrl } from "../../API/variables";
import { UserContext } from "../../context/user";

const Home = () => {
  const { user, handleUser, handleAuthentication } = useContext(UserContext);

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
          handleUser({
            user: apiUser.user,
            password: apiUser.password,
          });
          console.log(user);
          sessionStorage.setItem("user", user.user);
          handleAuthentication(true);
          return navigate("/movies");
        }
      }
    }
    handleAuthentication(false);
    setLoginError(true);
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(apiUsers);
    checkUserInApi(user, apiUsers);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(getUrl, config);
        setApiUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="container p-2">
        <h1 className="title has-text-light">
          Tech Challenge - <span className="has-text-danger">FIAP</span>
        </h1>
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
                  handleUser({ ...user, user: event.target.value });
                }}
              />
            </div>
            <div className="field">
              <label className="label has-text-light">Senha</label>
              <input
                className={`input ${loginError ? "is-danger" : ""}`}
                type="password"
                onChange={(event) => {
                  handleUser({ ...user, password: event.target.value });
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
