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
      <h1
        style={{
          width: "85vw",
          margin: "0 auto",
          marginBottom: "2rem",
          fontSize: "32px",
        }}>
        cocktails
      </h1>

      <div className='cocktails-center'>
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
