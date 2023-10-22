import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="section">
      <div className="container">
        <h1 className="title has-text-light">Ops!</h1>
        <h2 className="subtitle has-text-light">Página não encontrada! 404.</h2>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="button is-link">
          Retornar
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
