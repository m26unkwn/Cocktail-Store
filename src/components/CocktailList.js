import React from "react";
import { useGlobalContext } from "../Context";

import Loading from "./Loading";
import Cocktail from "./Cocktail";

export const CocktailList = () => {
  const { cocktail, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
