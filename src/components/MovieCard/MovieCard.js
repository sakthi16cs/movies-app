import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, getFavorites } from "../../features/movies/movieSlice";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isFavorite = favorites.some((f) => f.imdbID === data.imdbID);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(data));
  };

  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img 
              src={data.Poster !== "N/A" ? data.Poster : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=450&q=80"} 
              alt={data.Title} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=450&q=80";
              }}
            />
            <button className="favorite-btn" onClick={handleFavoriteClick}>
              {isFavorite ? "♥" : "♡"}
            </button>
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
