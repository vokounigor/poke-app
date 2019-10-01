import React from "react";
import "../../styles/mainContent.css";
import Heading from "../heading";
import PokeStarter from "./pokeStarter";
import bl from "../../assets/bulb.png";
import ch from "../../assets/char.png";
import sq from "../../assets/squ.png";
import { Link } from "react-router-dom";

export default function mainContent() {
  return (
    <section className="main__content">
      <div className="container">
        <Heading title={"Poké App"} />
        <p className="subt">Search for your favorite pokémon</p>
      </div>
      <div className="wrapper">
        <div className="starter__pokemon">
          <Link to="/pokemon/1">
            <PokeStarter name={"Bulbasaur"} img_name={bl} />
          </Link>
          <Link to="/pokemon/2">
            <PokeStarter name={"Charmander"} img_name={ch} />
          </Link>
          <Link to="/pokemon/3">
            <PokeStarter name={"Squirtle"} img_name={sq} />
          </Link>
        </div>
      </div>
      <div className="btn__wrap">
        <Link to="/pokemon">
          <p className="btn">Find Pokémon</p>
        </Link>
      </div>
    </section>
  );
}
