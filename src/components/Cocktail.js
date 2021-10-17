import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({ image, name, id }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <Link to={`/cocktail/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
