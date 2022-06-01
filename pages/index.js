import React, {useState, useEffect} from "react";
import Head from "next/head";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import NoResults from "../components/NoResults";
import RecipeGrid from "../components/RecipeGrid";
import RecipeCard from "../components/RecipeCard";
import About from "../components/About";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

import useFuse from "use-fuse";
import {rd} from "../fixtures/rd";
import {defaultIngredientSearch} from "../fixtures/default";

export default function Home() {
  const [list] = useState(
    rd.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
  );
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("ingredient");
  const [options, setOptions] = useState({
    keys: ["ingredients.name"]
  });
  const filteredList = useFuse(list, search, options);

  const showNoResults =
    filteredList.length === 0 ||
    JSON.stringify(filteredList) === JSON.stringify(defaultIngredientSearch);

  useEffect(
    () => {
      setIsLoading(false);
    },
    [filteredList]
  );

  useEffect(
    () => {
      if (mode === "ingredient") {
        setOptions({
          keys: ["ingredients.name"],
          threshold: 0.4
        });
      }

      if (mode === "recipe") {
        setOptions({
          keys: ["name"],
          threshold: 0.6
        });
      }
    },
    [mode]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>nespera</title>
      </Head>
      <main className={styles.main}>
        <Logo />
        <SearchBar
          search={search}
          setSearch={setSearch}
          setIsLoading={setIsLoading}
          mode={mode}
          setMode={setMode}
        />
        {mode === "about"
          ? <About />
          : <React.Fragment>
              {showNoResults
                ? <React.Fragment>
                    <NoResults />
                    <RecipeGrid>
                      {list.map(item => {
                        return <RecipeCard key={item.name} recipe={item} />;
                      })}
                    </RecipeGrid>
                  </React.Fragment>
                : <RecipeGrid>
                    {isLoading
                      ? <Spinner />
                      : filteredList.map(item => {
                          return <RecipeCard key={item.name} recipe={item} />;
                        })}
                  </RecipeGrid>}
            </React.Fragment>}
      </main>
      <Footer />
    </div>
  );
}
