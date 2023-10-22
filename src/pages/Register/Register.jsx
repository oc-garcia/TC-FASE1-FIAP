import { useState } from "react";
import axios from "axios";
import style from "./register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [newUser, setNewUser] = useState({
    user: "",
    password: "",
  });

  const postNewUser = async (data) => {
    try {
      const config = {
        headers: {
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhemxmc3h4bmJ2Y3VwcXRxcXhmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Njg2MDU1MywiZXhwIjoyMDEyNDM2NTUzfQ.g-AmyyofnSMuew141w9ZM_TgpX23-tAKctFPOuoameI",
        },
      };
      const response = await axios.post(
        "https://qazlfsxxnbvcupqtqqxf.supabase.co/rest/v1/ctj_autorizacao",
        data,
        config
      );
      console.log(response.status);
      navigate("/");
    } catch (error) {
      console.error(error);
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
      <div className="container">
        <h1 className="title">Tech Challenge - FIAP</h1>
        <h2 className="subtitle">Registre-se</h2>
        <section className="section">
          <form className={style.form} onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <input
                className="input"
                type="text"
                placeholder="example@email.com"
                name="user"
                onChange={(event) => {
                  setNewUser({ ...newUser, user: event.target.value });
                }}
              />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                onChange={(event) => {
                  setNewUser({ ...newUser, password: event.target.value });
                }}
              />
            </div>
            <button type="submit" className="button is-primary">
              Cadastre-se
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Register;
