import { Fragment } from "react";
import "./movieListStyle.css";
export const MovieList = (props) => {

    return(
        <ul className="hs full ">
            {props.movies.map((movie) => {
                if(movie.Poster !== 'N/A'){
                    return(<li className="item">
                    <img className="poster" src={movie.Poster}/>
                </li>);
                }
               
            })}
        </ul>
    );
}