import React, { Component } from "react";
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let pokedex1 = [];
    let pokedex2 = [...this.props.pokemon];

    while (pokedex1.length < pokedex2.length) {
      let idx = Math.floor(Math.random() * pokedex2.length);
      let idxPokemon = pokedex2.splice(idx, 1)[0];
      pokedex1.push(idxPokemon);
    }
    
    let exp1 = pokedex1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = pokedex2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={pokedex1} exp={exp1} isWinner={exp1< exp2} />
        <Pokedex pokemon={pokedex2} exp={exp2} isWinner={exp2< exp1} />
      </div>
    );
  }
}

export default Pokegame;
