import React from "react";

import { SearchForm } from "../components/SearchForm";
import { CocktailList } from "../components/CocktailList";

export const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};
