import './App.css';
import PropTyes from "prop-types";

function Movie({name, image, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <img src={image} alt={name}></img>
    </div>
  )
}
function renderMovie(movie){
  return <Movie key={movie.id} name={movie.name} image={movie.image} rating={movie.rating}></Movie>
}
const favMovie = [
  { id: 1,
    name: "pianist",
    image:  "https://t1.daumcdn.net/cfile/tistory/99EC9E335A191FF826",
    rating: 4.7
  },
  { id: 2,
    name: "new world",
    image: "https://upload.wikimedia.org/wikipedia/ko/6/6b/%EC%98%81%ED%99%94_%EC%8B%A0%EC%84%B8%EA%B3%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    rating: 4.5
  },
  { id: 3,
    name: "red",
    image: "https://t1.daumcdn.net/cfile/155B6E0D4CA4D1D119",
    rating: 4.3
  },
  { id: 4,
    name: "old boy",
    image: "https://t1.daumcdn.net/cfile/tistory/9973963F5B992E321F",
    rating: 4.6
  },
  { id: 5,
    name: "parasite",
    image: "https://upload.wikimedia.org/wikipedia/ko/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    rating: 5
  },
  { id: 6,
    name: "avengers",
    image: "https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    rating: 4.1
  },
]
Movie.PropTyes = {
  name: PropTyes.string.isRequired,
  image: PropTyes.string.isRequired,
  rating: PropTyes.number.isRequired
}
function App() {
  return (
    <div className="App">
      {favMovie.map(renderMovie)}
    </div>
  );
}

export default App;
