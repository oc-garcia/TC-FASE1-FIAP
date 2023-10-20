import { useState } from "react";
import axios from "axios";
import style from "./register.module.css";

function Register() {
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
      await axios.post("https://qazlfsxxnbvcupqtqqxf.supabase.co/rest/v1/ctj_autorizacao", data, config);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUser);
    postNewUser(newUser);
  };

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          onChange={(event) => {
            setNewUser({ ...newUser, user: event.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          onChange={(event) => {
            setNewUser({ ...newUser, password: event.target.value });
          }}
        />

        <button type="submit">Cadastre-se</button>
      </form>
    </section>
  );
}

export default Register;
