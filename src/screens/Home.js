import React from "react";

import { SearchForm } from "../components/SearchForm";
import { CocktailList } from "../components/CocktailList";
import Contact from "./Footer";

export const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
      <Contact />
    </main>
  );
};
