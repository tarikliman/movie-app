
import './SearchInput.css';
export const SearchInput = (props) => {

    return(
        <input
        className="search-input"
        type="text"
        value= {props.value}
        onChange={(e) => {props.setValue(e.target.value)}}
        placeholder='Search...'
        />
    );
}