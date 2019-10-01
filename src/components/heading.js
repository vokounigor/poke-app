import React from "react";
import image from '../assets/pokeball.svg';
import '../styles/heading.css';

export default function heading({ title }) {
  return (
    <div className="heading">
      <img src={image} alt="pokeball" />
      <h1>{title}</h1>
    </div>
  );
}
