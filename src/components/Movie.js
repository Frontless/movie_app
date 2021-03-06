import React from "react"
import PropTyes from "prop-types"
import "./Movie.css"
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link to={{pathname:`/movie/${id}`, state:{year,title,summary,poster,genres}}}>
            <div className="movie">
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">{
                        genres.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))
                    }
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>

                </div>
                <img src={poster} alt={title} title={title}></img>
            </div>
        </Link>
    )
}
Movie.PropTyes = {
    id: PropTyes.number.isRequired,
    year: PropTyes.number.isRequired,
    title: PropTyes.string.isRequired,
    summary: PropTyes.string.isRequired,
    poster: PropTyes.string.isRequired,
    genres: PropTyes.arrayOf(PropTyes.string).isRequired
}
export default Movie;