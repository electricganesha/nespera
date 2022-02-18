import styles from './SearchBar.module.scss';
import { DebounceInput } from 'react-debounce-input';

const SearchBar = ({ search, setSearch, setIsLoading }) => {
    return <div className={styles.search}>
        <label htmlFor="search">Pesquisar por ingredientes: </label>
        <DebounceInput
            minLength={2}
            debounceTimeout={1000}
            id="search"
            type="text"
            placeholder="P.ex. Esparguete Cogumelos"
            value={search}
            onKeyDown={() => { setIsLoading(true) }}
            onChange={e => {
                setSearch(e.target.value);
            }}
        />
    </div>
}

export default SearchBar;
