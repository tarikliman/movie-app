import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./movieListStyle.css";
export const MovieList = (props) => {

    const scrollLeft = () => {
        const left = document.querySelector(".hs");
        left.scrollBy({left : "-200", right :  "0", behavior : "smooth"});
      }
      const scrollRight = () => {
        const right = document.querySelector(".hs");
            right.scrollBy({left : "200", right :  "0", behavior : "smooth"});
      }

    return(
        <div className="relative">
        <button className="absolute" style={{left: "-26px", top: "43%"}}  onClick={scrollLeft}>
        <FontAwesomeIcon icon={faArrowLeft} style={{color: "rgb(100 116 139)", width: "20px", height : "auto"}} />
        </button>

        <button className="absolute " style={{right: "-30px",top: "45%" }}  onClick={scrollRight}>
      <FontAwesomeIcon icon={faArrowRight} style={{color: "rgb(100 116 139)", width: "20px", height : "auto"}}/>
      </button>

        <ul className="hs full no-scrollbar">
            {props.movies.map((movie) => {
                if(movie.Poster !== 'N/A'){
                    return(<li className="item">
                    <img className="poster" src={movie.Poster}/>
                </li>);
                }
               
            })}
        </ul>
        </div>
        
    );
}