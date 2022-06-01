import Image from "next/image";
import styles from "./SearchBar.module.scss";
import cc from "classcat";
import {DebounceInput} from "react-debounce-input";

const SEARCH_PLACEHOLDER_INGREDIENTS = "P. ex. Esparguete Cogumelos ";
const SEARCH_PLACEHOLDER_RECIPE = "P. ex. Bacalhau à brás";

const SearchBar = ({search, setSearch, setIsLoading, mode, setMode}) => {
  return (
    <div className={styles.search}>
      <div className={styles.search__categories}>
        <Image
          className={cc([
            styles["search__categories--inactive"],
            {[styles["search__categories--active"]]: mode === "ingredient"}
          ])}
          onClick={() => {
            mode !== "ingredient" && setMode("ingredient");
          }}
          src="/ingredients.png"
          width="48"
          height="48"
          alt="Ingredients Icon"
        />
        <Image
          className={cc([
            styles["search__categories--inactive"],
            {[styles["search__categories--active"]]: mode === "recipe"}
          ])}
          onClick={() => {
            mode !== "recipe" && setMode("recipe");
          }}
          src="/recipe.png"
          width="48"
          height="48"
          alt="Recipes Icon"
        />
        <Image
          className={cc([
            styles["search__categories--inactive"],
            {[styles["search__categories--active"]]: mode === "about"}
          ])}
          onClick={() => {
            mode !== "about" && setMode("about");
          }}
          src="/ask.png"
          width="48"
          height="48"
          alt="About Icon"
        />
      </div>
      {mode === "ingredient" &&
        <label htmlFor="search">Pesquisar por ingredientes: </label>}
      {mode === "recipe" &&
        <label htmlFor="search">Pesquisar por nome da receita: </label>}
      {mode === "about"
        ? null
        : <DebounceInput
            minLength={2}
            debounceTimeout={1000}
            id="search"
            type="text"
            placeholder={
              mode === "ingredient"
                ? SEARCH_PLACEHOLDER_INGREDIENTS
                : SEARCH_PLACEHOLDER_RECIPE
            }
            value={search}
            onKeyDown={() => {
              setIsLoading(true);
            }}
            onChange={e => {
              setSearch(e.target.value);
            }}
          />}
    </div>
  );
};

export default SearchBar;
