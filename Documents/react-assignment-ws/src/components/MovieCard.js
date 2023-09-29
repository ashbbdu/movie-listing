import React from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movieData }) => {
  const navigate = useNavigate();

  const handleMovieDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="row">
      {movieData.map((res) => {
        return (
          <div
            onClick={() => handleMovieDetails(res.id)}
            key={res.id}
            className="col-lg-3 col-md-4 col-sm-6 mt-4"
          >
            <div className="card">
              <img src={res.Poster} className="card-img-top" alt="poster" />
              <div className="card-body">
                <div>
                  <h2 title={res.Title} className="movie-title">
                    {res.Title}
                  </h2>
                  <div className=" ">
                    <p>IMDB Rating: {res.imdbRating} / 10</p>
                    
                    <p>Released On : {res.Released}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
