import style from "./movies.module.css";
import data from "../../db/movies.json";
import { PushPin, PushPinSlash } from "@phosphor-icons/react";
import { useState } from "react";

export default function Movies() {
  const library = data;
  console.log(library);

  const [favorite, setFavorite] = useState([]);

  function toggleFavorite(newFavoriteId) {
    const repeated = favorite.some((item) => item.id === newFavoriteId);

    let newList = [...favorite];

    if (!repeated) {
      newList.push(newFavoriteId);
      console.log(newList);
      return setFavorite(newList);
    }

    newList = favorite.filter((fav) => fav.id !== newFavoriteId);
    console.log(newList);
    return setFavorite(newList);
  }

  return (
    <section className={style.container}>
      <h1>Escolha seus filmes e séries favoritos!</h1>
      <div className={style.cardContainer}>
        {library.map((item) => (
          <div key={item.id} className="card">
            <h2 className="cardTitle">{item.Title}</h2>
            <p>{item.Plot}</p>
            <img className={style.movieImg} src={item.Images[0]} />
            <PushPin size={96} color="#58e8d1" />
            <PushPinSlash size={96} color="#58e8d1" />
          </div>
        ))}
      </div>
    </section>
  );
}
