import { Fragment } from "react";

export const MovieList = (props) => {

    return(
        <Fragment>
            {props.movies.map((movie) => {
                return(<div className="w-44 h-auto">
                    <img className="w-40 h-auto" src={movie.Poster}></img>
                </div>);
            })}
        </Fragment>
    );
}