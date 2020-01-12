import React from 'react';
import './card.style.css';


export const Card = (props) => (
  <div className="card-container">
    <img className="card-image" src={`https://robohash.org/14${props.monster.id}?set=set4&size=180x180`} alt="monster" />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);