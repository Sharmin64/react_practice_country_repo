import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, area, region, flags } = props.country;
  return (
    <div className="country">
      <h2>Country Name:{name.common} </h2>
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Continent: {region}</small>
      </p>
      <img id="image" src={flags.png} alt=""></img>
    </div>
  );
};

export default Country;
