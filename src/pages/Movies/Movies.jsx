import style from "./movies.module.css";
import data from "../../db/movies.json";
import { PushPin, PushPinSlash } from "@phosphor-icons/react";
import { useState } from "react";

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

  return (
    <section className="container">
      <div className="section">
        <h1 className="title has-text-light">Escolha seus filmes e séries favoritos!</h1>
        <div className={style.cardContainer}>
          {library.map((item) => (
            <div key={item.id} className="card mgb-large">
              <div className="card-header p-2">
                <h2 className="subtitle">{item.Title}</h2>
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
                  <div className="pin">
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
    </section>
  );
}
