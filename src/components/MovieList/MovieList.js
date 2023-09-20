import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./movieListStyle.css";
export const MovieList = (props) => {
   let type = {};
   props.type === "searched" ? type = {subtext : "Add Favourites"} :
    type = {subtext : "Remove Favorite"}

  const scrollLeft = (rowId) => {
    const left = document.getElementById(rowId);
    left.scrollBy({ left: "-200", right: "0", behavior: "smooth" });
  };
  const scrollRight = (rowId) => {
    const right = document.getElementById(rowId);
    right.scrollBy({ left: "200", right: "0", behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        className="arrow-button"
        style={{ left: "-26px", top: "43%" }}
        onClick={() => scrollLeft(props.type)}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{width: "20px", height: "auto" }}
        />
      </button>

      <button
        className="arrow-button"
        style={{ right: "-30px", top: "45%" }}
        onClick={() => scrollRight(props.type)}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{width: "20px", height: "auto" }}
        />
      </button>

      {props.movies && <ul id = {props.type} className="hs full no-scrollbar">
        {props.movies.map((movie) => {
          if (movie.Poster !== "N/A") {
            return (
              <li key= {movie.imdbID} className="item image-container">
                <img className="poster" alt="poster" src={movie.Poster} />
                <div onClick={props.type === "searched" ?  () => props.handleAddFavourite(movie) : () => props.handleDeleteFavourite(movie)}
                 className='overlay flex justify-center align-center'>
						{type.subtext}
					</div>
              </li>
            );
          }
        })}
      </ul> } 
    </div>
  );
};
