import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows, getFavorites, getLoading } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const favorites = useSelector(getFavorites);
  const loading = useSelector(getLoading);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  let renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      {favorites.length > 0 && (
        <div className="movie-list">
          <h2>My Favorites</h2>
          <div className="movie-container">
            {favorites.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))}
          </div>
        </div>
      )}
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
