import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router-dom";

export default function Sheet() {
  const { authenticated } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
  });
  return (
    <section className="container p-2">
      <h1 className="title has-text-light">
        Tech Challenge - <span className="has-text-danger">FIAP</span>
      </h1>
      <h2 className="subtitle has-text-light	">Planilha de favoritos</h2>
      <figure className="image is-16by9 is-rounded">
        <iframe
          className="has-ratio"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS8tr8sTx2IP_Uz7TOQaQE1ixVDVG34rGfwVMYHZmnD_8gwpnvwyS-AoMavzajT2u6nXh-F4f5yDYTi/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
      </figure>
    </section>
  );
}
