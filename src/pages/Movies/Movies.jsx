import style from "./movies.module.css";
import data from "../../db/movies.json";
import { PushPin, PushPinSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const library = data;
  console.log(library);

  const [favorite, setFavorite] = useState([]);

  // function toggleFavorite(newFavoriteId) {
  //   const repeated = favorite.some((item) => item.id === newFavoriteId);

  //   let newList = [...favorite];

  //   if (!repeated) {
  //     newList.push(newFavoriteId);
  //     console.log(newList);
  //     return setFavorite(newList);
  //   }

  //   newList = favorite.filter((fav) => fav.id !== newFavoriteId);
  //   console.log(newList);
  //   return setFavorite(newList);
  // }

  function addFavorite(movie){
    const data = {
      user: "emailuser",
      filme: "Shrek",
      imagem:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    };

    // Add one line to the sheet
    fetch(
      "https://sheet.best/api/sheets/715ca2da-eb68-4fa4-bbf6-dad283a4b056",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });

    //get all from sheet
    fetch(
      "https://sheet.best/api/sheets/715ca2da-eb68-4fa4-bbf6-dad283a4b056"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log({ response });
  }

  return (
    <section className="container py-2">
      <div className={style.sectionHeaderContainer}>
        <div className={style.sectionHeaderContent}>
          <h1 className="title has-text-light">
            Tech Challenge - <span className="has-text-danger">FIAP</span>
          </h1>
          <h2 className="subtitle has-text-light">Escolha seus filmes e séries favoritos!</h2>
        </div>
        <div className={style.sectionHeaderLink}>
          <a className="button is-link" href="#sheet">
            Verifique os favoritos!
          </a>
        </div>
      </div>
      <div className="section">
        <div className={style.cardContainer}>
          {library.map((item) => (
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
                    className="is-clickable"
                    onClick={() => {
                      item.favorite = !item.favorite;
                      console.log(item.favorite);
                    }}>
                    {item.favorite ? (
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
