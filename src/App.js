import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList/MovieList";
import "./App.css";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { switchActions } from "./store/index";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "rgb(241 245 249)",
  dark: "#12151c",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "rgb(241 245 249)",
});

export const shadowColor = theme("theme", {
  light: "rgba(0, 0, 0, 0.25)",
  dark: "rgba(0, 0, 0, 0.75)",
});

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 20px 4vw;
  display: grid;
  grid-gap: var(--gutter) 0;
  grid-template-columns: var(--gutter) 1fr var(--gutter);
  align-content: start;
  background-color: ${backgroundColor};
  color: ${textColor};

  & > * {
    grid-column: 2 / -2;
  }

  & .hs, & .item {
    background-color: ${backgroundColor};
  }

  & .search-input {
    color: ${textColor};
    border: 1px solid ${textColor};
    background-color: ${backgroundColor};
  }

  & .poster {
    -webkit-box-shadow: 0px 0px 5px 0px ${shadowColor};
    -moz-box-shadow: 0px 0px 5px 0px ${shadowColor};
    box-shadow: 0px 0px 5px 0px ${shadowColor};
  }
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("Harry");

  const dispatch = useDispatch();
  const themeValue = useSelector((state) => state.theme);

  const switchTheme = () => {
    dispatch(switchActions.toggleTheme());
  };

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ffaeee98`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);

  return (
    <ThemeProvider theme={{ theme: themeValue }}>
      <Container>
        <div className="flex justify-between text-slate-50 mb-12">
          <SearchInput value={searchValue} setValue={setSearchValue} />
          <button className="px-2" onClick={switchTheme}>
            {themeValue === 'dark' &&  <FontAwesomeIcon
              icon={faToggleOff}
              style={{	color: "rgb(226 232 240)", width: "40px", height: "auto" }}
            />}
           {themeValue === 'light' &&  <FontAwesomeIcon
              icon={faToggleOn}
              style={{ color: '#12151c', width: "40px", height: "auto" }}
            />}
          </button>
        </div>

        <div className="category-row">
          <p class=" pl-8 font-medium ">Searched</p>
          <MovieList movies={movies} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
