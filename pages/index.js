import { useState, useEffect } from 'react'
import Head from "next/head";
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import NoResults from '../components/NoResults';
import RecipeGrid from '../components/RecipeGrid';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";

import useFuse from "use-fuse";
import { rd } from '../fixtures/rd';
import { defaultSearch } from '../fixtures/default';

const options = {
  keys: ['ingredients.name'],
};

export default function Home() {
  const [list] = useState(rd);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const filteredList = useFuse(list, search, options);
  const showNoResults = JSON.stringify(filteredList) === JSON.stringify(defaultSearch);

  useEffect(() => {
    setIsLoading(false);
  }, [filteredList]);

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
        />
        {showNoResults
          ? <NoResults />
          : <RecipeGrid>
            {isLoading
              ? <Spinner />
              : filteredList.map(item => {
                return <RecipeCard key={item.name} recipe={item} />
              })
            }
          </RecipeGrid>
        }
      </main>
      <Footer />
    </div>
  );
}
