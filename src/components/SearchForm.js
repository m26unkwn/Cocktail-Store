import React, { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

import { useGlobalContext } from "../Context";

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
            placeholder='search'
          />
        </div>
      </form>
    </section>
  );
};
