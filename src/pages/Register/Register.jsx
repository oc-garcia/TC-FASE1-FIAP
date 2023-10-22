import { useState } from "react";
import axios from "axios";
import style from "./register.module.css";
import { useNavigate } from "react-router-dom";
import { config, postUrl } from "../API/variables";

const Register = () => {
  const [newUser, setNewUser] = useState({
    user: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  const postNewUser = async (data) => {
    setLoginError(false);
    try {
      const response = await axios.post(postUrl, data, config);
      console.log(response.status);
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUser);
    postNewUser(newUser);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="container p-2">
        <h1 className="title has-text-light">
          Tech Challenge - <span className="has-text-danger">FIAP</span>
        </h1>
        <h2 className="subtitle has-text-light">Registre-se</h2>
        <section className="section">
          <form className={style.form} onSubmit={handleSubmit}>
            <div className="field">
              <label className="label has-text-light">Usuário</label>
              <input
                className={`input ${loginError ? "is-danger" : ""}`}
                type="text"
                placeholder="example@email.com"
                name="user"
                onChange={(event) => {
                  setNewUser({ ...newUser, user: event.target.value });
                }}
              />
            </div>
            <div className="field">
              <label className="label has-text-light">Senha</label>
              <input
                className={`input ${loginError ? "is-danger" : ""}`}
                type="password"
                name="password"
                onChange={(event) => {
                  setNewUser({ ...newUser, password: event.target.value });
                }}
              />
            </div>
            {loginError && (
              <div className="field">
                <p className="help is-danger has-text-weight-bold">Usuário já cadastrado ou inválido!</p>
              </div>
            )}
            <button type="submit" className="button is-primary has-text-weight-bold">
              Cadastre-se
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Register;
