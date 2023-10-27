import style from "./movies.module.css";
import data from "../../db/movies.json";
import axios from "axios";
import { PushPin, PushPinSlash } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const library = data;
  const user = sessionStorage.getItem("user");

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorite(); // arrumar, está executando duas vezes
    console.log("executando getFavorite");
  }, []);

  function addFavorite(movie) {
    const data = {
      id: movie.id,
      user: user,
      movie: movie.Title,
      image: movie.Images[0],
    };

    axios
      .post(
        "https://sheet.best/api/sheets/715ca2da-eb68-4fa4-bbf6-dad283a4b056",
        data
      )
      .then(function (response) {
        console.log("post concluido", response);
      })
      .catch(function (error) {
        console.log("erro no post", error);
      });
  }

  function deleteFavorite(movie) {
    axios
      .delete(
        `https://sheet.best/api/sheets/715ca2da-eb68-4fa4-bbf6-dad283a4b056/search?id=${movie.id}&user=${user}`
      )
      .then(function (response) {
        console.log("delete concluido", response);
      })
      .catch(function (error) {
        console.log("erro no delete", error);
      });
  }

  function getFavorite() {
    axios
      .get(
        `https://sheet.best/api/sheets/715ca2da-eb68-4fa4-bbf6-dad283a4b056/search?user=${user}`
      )
      .then(function (response) {
        let array = [];
        response.data.map((movie) => {
          array.push(Number(movie.id));
        });
        setFavorites([...array]);
      })
      .catch(function (error) {
        console.log("erro no get", error);
      });
  }

  function toggleFavorite(item) {
    const index = favorites.indexOf(item.id);

    if (index > -1) {
      favorites.splice(index, 1);
      setFavorites([...favorites]);

      deleteFavorite(item);
      return;
    }

    setFavorites([...favorites, item.id]);

    addFavorite(item);
  }

  return (
    <section className="container py-2">
      <div className={style.sectionHeaderContainer}>
        <div className={style.sectionHeaderContent}>
          <h1 className="title has-text-light">
            Tech Challenge - <span className="has-text-danger">FIAP</span>
          </h1>
          <h2 className="subtitle has-text-light">
            Escolha seus filmes e séries favoritos!
          </h2>
        </div>
        <div className={style.sectionHeaderLink}>
          <a className="button is-link" href="#sheet">
            Verifique os favoritos!
          </a>
        </div>
      </div>
      <div className="section">
        <div className={style.cardContainer}>
          {library.map((item, index) => (
            <div key={item.id} className="card mgb-large">
              <div className="card-header p-2">
                <h2 className="subtitle has-text-weight-bold">{item.Title}</h2>
              </div>
              <div className="card-content">
                <p className="content">{item.Genre}</p>
              </div>
              <div className="card-image">
                <figure className="image">
                  <img className={style.movieImg} src={item.Images[0]} />
                </figure>
              </div>
              <div className="card-footer">
                <div className="card-footer-item">
                  <div
                    key={index}
                    className="is-clickable"
                    onClick={() => {
                      toggleFavorite(item);
                    }}
                  >
                    {favorites.find((id) => id === item.id) ? (
                      <PushPinSlash size={40} color="hsl(348, 100%, 61%)" />
                    ) : (
                      <PushPin size={40} color="hsl(171, 100%, 41%)" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/sheet" id="sheet">
        <div className="hero is-link">
          <div className="hero-body">
            <p className="title">Planilha de favoritos</p>
            <p className="subtitle">Acesse aqui!</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
