import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {

  const [movies, setMovies] = useState(data);

  function tambahFilm(){
    const movie = {
      id: nanoid(8),
      title: "One Piece",
      year: "1999",
      type: "Anime",
      poster: "https://picsum.photos/536/354"
    };

    setMovies([...movies, movie])
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            movies.map(function(movie) {
              return <Movie key={movie.id} movie={movie} />;
            })
          }
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;